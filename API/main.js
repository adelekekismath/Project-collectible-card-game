const express = require('express')
const Web3 = require('web3');
const web3 = new Web3('URL_DU_NOEUD_ETHEREUM'); // Remplacez par l'URL du nœud Ethereum

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/collection/:collectionId', async (req, res) => {
    const collectionId = req.params.collectionId;

    // Adresse du contrat intelligent de la collection
    const contractAddress = '0xVotreAdresseDeContrat';

    // Adresse de l'utilisateur connecté (vous devrez gérer l'authentification)
    const userAddress = '0xVotreAdresseUtilisateur';

    // Créez une instance du contrat en utilisant son ABI (Interface)
    const contractABI = [...]; // Remplacez par l'ABI de votre contrat
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    try {
        // Utilisez Web3.js pour appeler une fonction de votre contrat pour récupérer les informations
        const collectionInfo = await contract.methods.getCollectionInfo(collectionId).call({ from: userAddress });

        // Répondez avec les données récupérées
        res.json(collectionInfo);
    } catch (error) {
        // Répondez avec une erreur si la collection n'existe pas ou s'il y a une autre erreur
        res.status(404).json({ error: 'Collection non trouvée' });
    }
});


// Créer une nouvelle collection
app.post('/collection', (req, res) => {
    const { name, cardCount } = req.body;

    // Utilisez Web3.js pour créer une nouvelle collection dans le contrat intelligent
    // Répondez avec la confirmation de création ou une erreur en cas d'échec
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
