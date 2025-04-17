const express = require('express');
// on importe express

require('dotenv').config();
// on importe le fichier .env

const app = express();
// on declare l'application express

app.use(express.json());
// on declare le middleware pour parser le json

app.get('/', (req, res) => {
    res.send('Hello World!');
});
// on declare la route racine

const stagiaireRoute = require('./routes/StagiairesRoutes');
const formationRoute = require('./routes/FormationsRoutes');
const formateurRoute = require('./routes/FormateursRoutes');

app.use('/formateurs', formateurRoute);
app.use('/stagiaires', stagiaireRoute);
app.use('/formations', formationRoute);




app.use((req, res) => {
    res.status(404).json({ message: 'Route non trouvé' });
});

app.listen(process.env.PORT, () => {
    console.log(`✅ Votre serveur est lancé sur http://127.0.0.1:${process.env.PORT}`);
  });
