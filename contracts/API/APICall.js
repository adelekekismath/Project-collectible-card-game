const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/cards/:set', async (req, res) => {
  try {
    const set = req.params.set;
    const pageSize = 1;

    // Construction de l'URL de l'API avec le paramètre set
    const apiUrl = `https://api.pokemontcg.io/v2/cards?pageSize=${pageSize}&q=set.id%3A${set}`;

    // Requête à l'API Pokemon TCG
    const response = await axios.get(apiUrl);

    const cardsData = response.data.data;
    const importantData = cardsData.map(card => ({
      id: card.id,
      name: card.name,
      imageUrlSmall: card.images.small,
      imageUrlLarge: card.images.large,
      level : card.level,
      hp : card.hp,
      type : card.types,
      attacks : card.attacks,
      weaknesses : card.weaknesses,
      retreatCost : card.retreatCos,
      set : card.set
      // Ajoutez d'autres propriétés importantes ici
    }));
    res.json(importantData);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
