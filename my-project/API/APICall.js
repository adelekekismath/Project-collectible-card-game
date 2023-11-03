const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/cards/:set/:id', async (req, res) => {
  try {
    const set = req.params.set;
    const cardId = req.params.id;
    const apiUrl = `https://api.pokemontcg.io/v2/cards/${set}-${cardId}`;
    const response = await axios.get(apiUrl);
    const cardData = response.data.data;
    const importantData = {
      
      name: cardData.name,
      image: cardData.images.large,
      type: cardData.types,
      id: cardData.id,
      level: cardData.level,
      hp: cardData.hp,
      attacks: cardData.attacks,
      weaknesses: cardData.weaknesses,
      retreatCost: cardData.retreatCost,
      set: cardData.set.id,
      // Add other important properties here
    };

    res.json(importantData);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
