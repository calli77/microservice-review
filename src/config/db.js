const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connexion à la base MongoDB effectuée avec succès !');
  } catch (error) {
    console.error('Erreur lors de la connexion à la base :', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
