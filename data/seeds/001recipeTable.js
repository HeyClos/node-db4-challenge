
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Tacos', descriptions:'makes 3 tacos'},
        {name: 'Guacamole', descriptions:'makes 3 guacs'},
        {name: 'Quesadilla', descriptions:'makes 3 quesadillas'},
        {name: 'Nachos', descriptions:'makes 3 Nachos'},
      ]);
    });
};
