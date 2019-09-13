exports.up = function(knex) {
	return knex.schema
		.createTable('recipes', (tbl) => {
			tbl.increments()
			tbl
				.string('recipe_name', 255)
				.notNullable()
				.unique()
		})
		.createTable('ingredients', (tbl) => {
			tbl.increments()
			tbl
				.string('ingredient_name', 255)
				.nullable()
				.unique()
		})
		.createTable('recipe_ingredients', (tbl) => {
			tbl.increments()
			tbl.integer('quantity')
            tbl.string('ingredients')
			//FK
			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE')

			tbl
				.integer('ingredient_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('ingredients')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE')
		})
		.createTable('steps', (tbl) => {
			tbl.increments()
			tbl.integer('step_number').notNullable()
			tbl.string('instruction', 400).notNullable()
			//FK
			tbl
				.integer('recipe_id')
				.unsigned()
                .notNullable() 
        });
    };

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('schemes');
};