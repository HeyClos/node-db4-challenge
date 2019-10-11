
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, step_number: 1, description: 'chop the chicken'},
        {recipe_id: 1, step_number: 2, description: 'season all the things'},
        {recipe_id: 1, step_number: 3, description: 'shake and bake'},
        {recipe_id: 2, step_number: 1, description: 'add the avocado'},
        {recipe_id: 2, step_number: 2, description: 'pur lime in coconut'},
        {recipe_id: 2, step_number: 3, description: 'mix it up'}
      ]);
    });
};
