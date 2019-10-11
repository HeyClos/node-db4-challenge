
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name', 128)
         .unique()
         .notNullable();
      tbl.string('description', 128)
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('name', 128)
         .unique()
         .notNullable()
  })
  .createTable('ingredients', tbl => {
    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipe')
    tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
    tbl.integer('quantity')
        .unsigned()
        .notNullable()
    })
    .createTable('steps', tbl => {
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
        tbl.integer('step_number')
            .unsigned()
            .notNullable()
        tbl.string('description', 128)
            .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
