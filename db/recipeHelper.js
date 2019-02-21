const knex = require("knex");
const config = require("../knexfile.js");
const db = knex(config.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

function getDishes() {
  return db("dishes");
}

function findDishById(id) {
  return db("dishes")
    .where({ id })
    .first();
}

async function addDish(dish) {
  const [id] = await db("dishes").insert(dish);

  return findDishById(id);
}

function getDish(id) {
  return db("dishes as d")
    .join("d.dish_id", "recipes as r", "r.recipe_id")
    .select(
      "d.id as dishID",
      "d.name as dishName",
      "r.id as recipeID",
      "r.name as recipeName"
    )
    .where({ dish_id: id });
}

function getRecipes() {
  return db("recipes as r")
    .join("dishes as d", "r.recipe_id", "d.dish_id")
    .select("r.name as recipeName", "d.name as dishName")
    .where({ dish_id: id });
}

function findRecipeById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

async function addRecipe(recipe) {
  const [id] = await db("recipes").insert(recipe);

  return findRecipeById(id);
}
