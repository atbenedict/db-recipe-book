exports.up = function(knex, Promise) {
  return knex.schema.createTable("ing_for_step", function(tbl) {
    tbl.increments();
    tbl
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("step_number")
      .unsigned()
      .references("id")
      .inTable("instructions")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.int("ingred_id").notNullable();
    tbl.float("amount").notNullable();
    tbl.string("unit").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ing_for_step");
};
