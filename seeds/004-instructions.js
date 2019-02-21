exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      return knex("instructions").insert([
        {
          recipe_id: 1,
          step_number: 1,
          instructions: "Get these things together."
        },
        { recipe_id: 1, step_number: 2, instructions: "Do this with fire." },
        { recipe_id: 1, step_number: 3, instructions: "Put it on the table." },
        {
          recipe_id: 2,
          step_number: 1,
          instructions: "Get these things together."
        },
        { recipe_id: 2, step_number: 2, instructions: "Do this with fire." },
        { recipe_id: 2, step_number: 3, instructions: "Put it on the table." },
        {
          recipe_id: 3,
          step_number: 1,
          instructions: "Get these things together."
        },
        { recipe_id: 3, step_number: 2, instructions: "Do this with fire." },
        { recipe_id: 3, step_number: 3, instructions: "Put it on the table." },
        {
          recipe_id: 4,
          step_number: 1,
          instructions: "Get these things together."
        },
        { recipe_id: 4, step_number: 2, instructions: "Do this with fire." },
        { recipe_id: 4, step_number: 3, instructions: "Put it on the table." },
        {
          recipe_id: 5,
          step_number: 1,
          instructions: "Get these things together."
        },
        { recipe_id: 5, step_number: 2, instructions: "Do this with fire." },
        { recipe_id: 5, step_number: 3, instructions: "Put it on the table." }
      ]);
    });
};
