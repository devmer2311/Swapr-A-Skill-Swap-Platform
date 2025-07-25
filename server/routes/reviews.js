const express = require('express');
const Review = require('../models/Review');
const User = require('../models/User');
const SwapRequest = require('../models/SwapRequest');
const Notification = require('../models/Notification');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Get reviews for a user
router.get('/user/:userId', async (req, res) => {
  try {
    const { limit = 20, page = 1 } = req.query;
    
    const reviews = await Review.find({ revieweeId: req.params.userId })
      .populate('reviewerId', 'name profilePhoto')
      .populate('swapRequestId', 'skillOffered skillWanted')
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await Review.countDocuments({ revieweeId: req.params.userId });

    res.json({
      reviews,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Get reviews error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create review
router.post('/', auth, async (req, res) => {
  try {
    const { 
      swapRequestId, 
      revieweeId, 
      rating, 
      comment,
      skillRating,
      communicationRating,
      punctualityRating,
      helpfulnessRating,
      tags,
      wouldSwapAgain
    } = req.body;

    // Check if swap request exists and user is authorized
    const swapRequest = await SwapRequest.findById(swapRequestId);
    if (!swapRequest) {
      return res.status(404).json({ message: 'Swap request not found' });
    }

    if (swapRequest.fromUserId.toString() !== req.user._id.toString() && 
        swapRequest.toUserId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    // Check if review already exists
    const existingReview = await Review.findOne({
      swapRequestId,
      reviewerId: req.user._id
    });

    if (existingReview) {
      return res.status(400).json({ message: 'Review already exists' });
    }

    // Create review
    const review = new Review({
      swapRequestId,
      reviewerId: req.user._id,
      revieweeId,
      rating,
      comment,
      skillRating,
      communicationRating,
      punctualityRating,
      helpfulnessRating,
      tags,
      wouldSwapAgain
    });

    await review.save();

    // Update user's rating
    const reviews = await Review.find({ revieweeId });
    const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
    
    await User.findByIdAndUpdate(revieweeId, {
      rating: averageRating,
      totalReviews: reviews.length
    });

    // Create notification
    const notification = new Notification({
      userId: revieweeId,
      type: 'review',
      title: 'New Review',
      message: `${req.user.name} left you a ${rating}-star review`,
      data: { reviewId: review._id, rating }
    });

    await notification.save();

    await review.populate('reviewerId', 'name profilePhoto');
    await review.populate('swapRequestId', 'skillOffered skillWanted');

    res.status(201).json(review);
  } catch (error) {
    console.error('Create review error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's given reviews
router.get('/given', auth, async (req, res) => {
  try {
    const { limit = 20, page = 1 } = req.query;
    
    const reviews = await Review.find({ reviewerId: req.user._id })
      .populate('revieweeId', 'name profilePhoto')
      .populate('swapRequestId', 'skillOffered skillWanted')
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await Review.countDocuments({ reviewerId: req.user._id });

    res.json({
      reviews,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Get given reviews error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;