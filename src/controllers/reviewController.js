const Review = require('../models/reviewModel');
const mongoose = require('mongoose');

const hasPurchasedProduct = async (userId, productId) => {
  return true;
};

// Ajouter un avis
const addReview = async (req, res) => {
  try {
    const { productId, userId, rating, comment } = req.body;
    const review = new Review({ productId, userId, rating, comment });
    await review.save();
    res.status(201).json({ message: 'Review added', review });
  } catch (error) {
    res.status(500).json({ message: 'Error adding review', error });
  }
};

// // Modifier un avis
// const updateReview = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { userId, rating, comment } = req.body;

//     const review = await Review.findById(id);
//     if (!review) {
//       return res.status(404).json({ message: 'Review not found' });
//     }

//     // Vérifier si l'utilisateur est le propriétaire de l'avis
//     if (review.userId !== userId) {
//       return res.status(403).json({ message: 'You can only update your own review' });
//     }

//     review.rating = rating || review.rating;
//     review.comment = comment || review.comment;
//     await review.save();

//     res.status(200).json({ message: 'Review updated', review });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating review', error });
//   }
// };

// Supprimer un avis
const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    // Vérifier si l'ID est valide
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid review ID' });
    }

    // Supprimer directement l'avis par son ID
    const review = await Review.findByIdAndDelete(id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.status(200).json({ message: 'Review deleted' });
  } catch (error) {
    console.error("Error deleting review:", error);
    res.status(500).json({ message: 'Error deleting review', error: error.message });
  }
};



// Récupérer les avis d'un produit
const getReviews = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({ productId });
    const averageRating =
      reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length || 0;

    res.status(200).json({ reviews, averageRating });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};


module.exports = { addReview, deleteReview, getReviews };