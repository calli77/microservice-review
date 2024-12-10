const express = require('express');
const {
  addReview,
  updateReview,
  deleteReview,
  getReviews,
} = require('../controllers/reviewController');

const router = express.Router();

router.post('/', addReview); // Ajouter un avis
router.get('/:productId', getReviews); // Récupérer les avis d'un produit
// router.put('/:id', updateReview); // Modifier un avis
router.delete('/:id', deleteReview); // Supprimer un avis

module.exports = router;