const recipes = [
    {
        title: "Bolo de Chocolate",
        ingredients: ["2 xícaras de farinha", "1 xícara de açúcar", "1/2 xícara de cacau em pó", "1 xícara de leite", "2 ovos"],
        instructions: "Misture todos os ingredientes e asse por 40 minutos a 180°C."
    },
    {
        title: "Lasanha",
        ingredients: ["500g de massa de lasanha", "500g de carne moída", "300g de queijo mussarela", "Molho de tomate", "1 cebola picada"],
        instructions: "Cozinhe a carne com cebola e molho. Monte a lasanha com camadas de massa, carne e queijo. Asse por 30 minutos."
    },
    {
        title: "Salada Caesar",
        ingredients: ["1 alface romana", "1/2 xícara de croutons", "1/4 xícara de queijo parmesão", "Molho Caesar"],
        instructions: "Misture os ingredientes e sirva com molho Caesar."
    }
];

const recipeList = document.getElementById('recipe-list');
const recipeDetails = document.getElementById('recipe-details');
const recipeTitle = document.getElementById('recipe-title');
const ingredientsList = document.getElementById('ingredients-list');
const recipeInstructions = document.getElementById('recipe-instructions');
const closeBtn = document.getElementById('close-btn');

function loadRecipes() {
    recipes.forEach((recipe, index) => {
        const li = document.createElement('li');
        li.textContent = recipe.title;
        li.addEventListener('click', () => showRecipeDetails(index));
        recipeList.appendChild(li);
    });
}

function showRecipeDetails(index) {
    const recipe = recipes[index];
    recipeTitle.textContent = recipe.title;
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    recipeInstructions.textContent = recipe.instructions;
    recipeDetails.classList.remove('hidden');
}

closeBtn.addEventListener('click', () => {
    recipeDetails.classList.add('hidden');
});

loadRecipes();