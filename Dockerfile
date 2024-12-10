# Utiliser une image officielle Node.js comme base
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et package-lock.json (si présent)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code dans le conteneur
COPY . .

# Exposer le port sur lequel l'application sera exécutée
EXPOSE 5000

# Commande pour lancer l'application
CMD ["npm", "start"]
