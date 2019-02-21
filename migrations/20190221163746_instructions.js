exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", function(tbl) {
    tbl.increments();
    tbl
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.int("step_number").notNullable();
    tbl.varchar("instructions", 1024).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("instructions");
};
