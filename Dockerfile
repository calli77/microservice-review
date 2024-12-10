# Utiliser une image officielle Node.js comme base
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier uniquement les fichiers nécessaires pour installer les dépendances
COPY package*.json ./

# Installer les dépendances de production uniquement
RUN npm install --production

# Copier tout le reste du code dans le conteneur
COPY . .

# Ajouter un utilisateur non root pour exécuter l'application
RUN adduser -D appuser
USER appuser

# Exposer le port utilisé par Express
EXPOSE 3556

# Définir la commande de démarrage (lancer le serveur Express)
CMD ["npm", "start"]
