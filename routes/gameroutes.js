const express = require('express');
const gameRouter = express.Router();

const gameController = require('../controllers/gameController');

.get('/', gameController.index);

gameController.post('/', gameController.create);
gameController.get('/:id', gameController.show);
gameController.put('/:id', gameController.update);
gameController.delete('/:id', gameController.delete);

module.exports = gameController;
