
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
        {recipe_name: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
};
