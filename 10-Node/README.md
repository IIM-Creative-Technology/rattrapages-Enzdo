Lien vers la video qui explique le code : <a href="https://youtu.be/ERJNuC6zQoY">Lien</a>
# README - Configuration du projet "Rattrapage Node.js - Création d'une API"

## Ce README fournit des instructions détaillées pour configurer le projet "Rattrapage Node.js - Création d'une API". 

Ce projet utilise Node.js pour le backend et MongoDB comme base de données. Le frontend est facultatif.

⚠️ Prérequis ⚠️

### Assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Node.js : https://nodejs.org
- MongoDB : https://www.mongodb.com

## Configuration du projet backend (Node.js)

### Clonez le projet à partir du référentiel GitHub :
`git clone <URL_du_projet>` Remplacez <URL_du_projet> par l'URL du dépôt GitHub contenant le code source du projet.

Accédez au répertoire du projet : `cd rattrapages-Enzdo`

Accédez ensuite au dossier backend : `cd backend`

### Installez les dépendances du projet en exécutant la commande suivante :
` npm install `

### Lancer le serveur avec
` nodemon `

## Configuration de la base de données MongoDB

⚠️ Assurez-vous d'avoir MongoDB installé et en cours d'exécution sur votre machine. Consultez la documentation officielle de MongoDB pour obtenir des instructions spécifiques à votre système d'exploitation. ⚠️

### Lancez l'interface en ligne de commande MongoDB (mongo shell) en exécutant la commande suivante dans un terminal :
`mongosh`

Assurez-vous que le service MongoDB est en cours d'exécution et qu'il est accessible à l'adresse mongodb://localhost:27017.

## Configuration du projet frontend (facultatif)

Si vous souhaitez également configurer le projet frontend, suivez les étapes suivantes :

### Accédez au répertoire du projet coté frontend :

``` cd frontend ```

### Installez les dépendances du projet en exécutant la commande suivante :

`npm install`

### Puis lancer le front avec la commande suivante : 

`npm run dev`
