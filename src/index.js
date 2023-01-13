import './styles.css';

const activateRecipePrompt = document.querySelector('#addrecipeprompt');
const recipePrompt = document.querySelector('#recipeprompt');
const addRecipeButton = document.querySelector('#addrecipe')
activateRecipePrompt.addEventListener('click', () => {
    recipePrompt.style.setProperty('display', 'block')
})

addRecipeButton.addEventListener('click', () => {
    recipePrompt.style.setProperty('display', 'none')
})