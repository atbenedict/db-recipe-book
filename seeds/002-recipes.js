exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      return knex("recipes").insert([
        { name: "Chopped Salad", dish_id: 1 },
        { name: "Heirloom Tomato Salad", dish_id: 1 },
        { name: "Clam Chowder", dish_id: 2 },
        { name: "Borscht", dish_id: 2 },
        { name: "Grannys Tacos", dish_id: 3 },
        { name: "Awesome Pizza", dish_id: 3 },
        { name: "Fudge Brownies", dish_id: 4 },
        { name: "Key Lime Pie", dish_id: 4 },
        { name: "Crackers and Cheese", dish_id: 5 },
        { name: "Cheese and Crackers", dish_id: 5 }
      ]);
    });
};
