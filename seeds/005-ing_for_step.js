exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ing_for_step")
    .truncate()
    .then(function() {
      return knex("ing_for_step").insert([
        { recipe_id: 1, step_number: 1, ingred_id: 1, amount: 1.5, unit: "oz" },
        { recipe_id: 1, step_number: 1, ingred_id: 2, amount: 1.5, unit: "oz" },
        { recipe_id: 2, step_number: 1, ingred_id: 4, amount: 1.5, unit: "oz" },
        { recipe_id: 2, step_number: 1, ingred_id: 3, amount: 1.5, unit: "oz" },
        { recipe_id: 2, step_number: 1, ingred_id: 7, amount: 1.5, unit: "oz" },
        { recipe_id: 3, step_number: 1, ingred_id: 2, amount: 1.5, unit: "oz" },
        { recipe_id: 3, step_number: 1, ingred_id: 8, amount: 1.5, unit: "oz" },
        { recipe_id: 3, step_number: 1, ingred_id: 6, amount: 1.5, unit: "oz" },
        { recipe_id: 4, step_number: 1, ingred_id: 5, amount: 1.5, unit: "oz" },
        { recipe_id: 4, step_number: 1, ingred_id: 4, amount: 1.5, unit: "oz" },
        { recipe_id: 4, step_number: 1, ingred_id: 1, amount: 1.5, unit: "oz" },
        { recipe_id: 5, step_number: 1, ingred_id: 2, amount: 1.5, unit: "oz" },
        { recipe_id: 5, step_number: 1, ingred_id: 4, amount: 1.5, unit: "oz" },
        { recipe_id: 5, step_number: 1, ingred_id: 3, amount: 1.5, unit: "oz" },
        { recipe_id: 6, step_number: 1, ingred_id: 7, amount: 1.5, unit: "oz" },
        { recipe_id: 7, step_number: 1, ingred_id: 2, amount: 1.5, unit: "oz" },
        { recipe_id: 7, step_number: 1, ingred_id: 4, amount: 1.5, unit: "oz" },
        { recipe_id: 8, step_number: 1, ingred_id: 5, amount: 1.5, unit: "oz" },
        { recipe_id: 9, step_number: 1, ingred_id: 6, amount: 1.5, unit: "oz" },
        { recipe_id: 9, step_number: 1, ingred_id: 7, amount: 1.5, unit: "oz" },
        {
          recipe_id: 10,
          step_number: 1,
          ingred_id: 8,
          amount: 1.5,
          unit: "oz"
        },
        { recipe_id: 10, step_number: 1, ingred_id: 9, amount: 1.5, unit: "oz" }
      ]);
    });
};
