
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dogs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {id: 1, name: 'BowWow', breed: "Black Lab"},
        {id: 2, name: 'Goldie', breed: "Corgi"},
        {id: 3, name: 'Rufus', breed: "German Shepherd"}
      ]);
    });
};
