const Game = require('../models/Game');


const gameController = {}

gameController.index = (req, res, next) => {
  Game.findAll()
    .then(game => {
      res.status(200).json({
        message: 'ok',
        data: {
          game: game,
        }
      });
    }).catch(next);
}

gameController.show = (req, res, next) => {
  Game.findById(req.params.id)
    .then(game => {
      res.status(200).json({
        message: 'ok',
        data: {
          game: game,
        }
      });
    }).catch(next);
};

gameController.create = (req, res, next) => {
  Game.create({
    username: req.body.username,
    score: req.body.score,
  }).then(game => {
    res.status(201).json({
      message: 'Created successfully',
      data: {
        game: game,
      },
    });
  }).catch(next);
};

gameController.update = (req, res, next) => {
  Game.update({
    username: req.body.username,
    score: req.body.score,
  }, req.params.id)
    .then(game => {
      res.status(202).json({
        message: 'Updated successfully',
        data: {
          game: game,
        },
      });
    }).catch(next);
};


gameController.delete = (req, res, next) => {
  Game.destroy(req.params.id)
    .then(() => {
      res.status(202).json({
        message: 'Deleted successfully',
      });
    }).catch(next);
};

module.exports = gameController;
