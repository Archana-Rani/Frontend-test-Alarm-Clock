// Sample data structure to store meals
let meals = [];

// Function to add a new meal
function addMeal() {
  const mealName = document.getElementById('mealName').value;
  const mealCategory = document.getElementById('mealCategory').value;
  const mealIngredients = document.getElementById('mealIngredients').value;

  // Create a new meal object
  const newMeal = {
    name: mealName,
    category: mealCategory,
    ingredients: mealIngredients
  };

  // Add the new meal to the meals array
  meals.push(newMeal);

  // Clear the form fields
  document.getElementById('mealForm').reset();

  // Update the displayed meal list
  displayMeals();
}

// Function to display meals based on the search category
function searchMeals() {
  const searchCategory = document.getElementById('searchCategory').value.toLowerCase();
  const filteredMeals = meals.filter(meal => meal.category.toLowerCase().includes(searchCategory));
  displayMeals(filteredMeals);
}

// Function to display meals in the UI
function displayMeals(mealsToDisplay = meals) {
  const mealListElement = document.getElementById('mealList');
  mealListElement.innerHTML = ''; // Clear existing list

  mealsToDisplay.forEach(meal => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = `
      <strong>${meal.name}</strong><br>
      Category: ${meal.category}<br>
      Ingredients: ${meal.ingredients}
    `;
    mealListElement.appendChild(listItem);
  });
}

// Initial display of meals
displayMeals();
