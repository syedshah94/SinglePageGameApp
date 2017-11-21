const db = require('../db/config');

const Game {}

Game.findALl = () => {
  return db.query ('SELECT * FROM leaderboard');
}

Game.findById = (id) => {
  return db.one(`SELECT * FROM leaderboard WHERE id = ${id}`)
}

Game.create = (user) => {
  return db.one (`
    INSERT INTO leaderboard (username, score) VALUES ($1, $2)
    RETURNING *`, [game.username, game.score]);
}
