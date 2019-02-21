exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      return knex("ingredients").insert([
        { ingred_name: "Cheese, Cheddar" },
        { ingred_name: "Tomato" },
        { ingred_name: "Clams" },
        { ingred_name: "Beets" },
        { ingred_name: "Taco Shells" },
        { ingred_name: "Pepperoni" },
        { ingred_name: "Chocolate" },
        { ingred_name: "Sugar" },
        { ingred_name: "Crackers" },
        { ingred_name: "Lettuce, Iceburg" }
      ]);
    });
};
