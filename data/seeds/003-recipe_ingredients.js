
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').insert([
        { quantity: 6, ingredients: "Cilantro" },
        { quantity: 4, ingredients: "Lime" },
      ]);
};
