document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('#search');
    const recipes = document.querySelectorAll('.recipe-card');
  
    searchInput.addEventListener('keyup', function() {
      const term = searchInput.value.toLowerCase();
      recipes.forEach(recipe => {
        const title = recipe.querySelector('h3').textContent.toLowerCase();
        if (title.includes(term)) {
          recipe.style.display = 'block';
        } else {
          recipe.style.display = 'none';
        }
      });
    });
  });
  