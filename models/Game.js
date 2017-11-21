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


Game.update = (user, id) => {
  return db.one(
    `
      UPDATE leaderboard SET
      username = $1
      WHERE id = $2
      RETURNING *
    `, [game.username, id]
  );
};

Game.destroy = id => {
  return db.none(
    `
      DELETE FROM leaderboard
      WHERE id = $1
    `, [id]
  );
};

module.exports = Game;
