// EXERCISE API GENERATOR

const submitQuery2 = document.getElementById("api-query2");
const userInput2 = document.getElementById("query-input2");
const exercisesDiv = document.getElementById("exercise-list");

const fetchData2 = () => {
    const inputValue2 = userInput2.value; 
    const url = `https://api.api-ninjas.com/v1/exercises?muscle=${inputValue2}`; 
    const key = {
        headers: { 'x-api-key': '9uIr2fvAn8JOJkk8M5TFFV4EUTHMNNtuXdcsIQkj' }
    };

    exercisesDiv.innerHTML = "";
    fetch(url, key)
    .then(res => res.json())
    .then(exercises => {
        console.log('Fetched data:', exercises);
        exercises.forEach(exercise => {
            const exerciseItem = document.createElement('div');
            const titleElement = document.createElement('p');
            const instructionsList = document.createElement('p')
            instructionsList.innerText = exercise.difficulty;
            titleElement.innerText = exercise.instructions;
            exerciseItem.innerText = exercise.name; 
            exerciseItem.appendChild(instructionsList);
            exerciseItem.appendChild(titleElement);
            exercisesDiv.appendChild(exerciseItem);
        
            exercisesDiv.style.border = 'solid 10px black';
            exercisesDiv.style.padding = '10px';
        })
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
submitQuery2.addEventListener("click", () => { 
    fetchData2();
});


// Recipe API
const submitQuery = document.getElementById("api-query");
const userInput = document.getElementById("query-input");
const recipesDiv = document.getElementById("recipe-list");

const fetchData = () => {
    const inputValue = userInput.value;
    const url = `https://api.api-ninjas.com/v1/recipe?query=${inputValue}`;
    const key = {
        headers: { 'x-api-key': '9uIr2fvAn8JOJkk8M5TFFV4EUTHMNNtuXdcsIQkj' }
    };

    recipesDiv.innerHTML ="";
    fetch(url, key)
    .then(res => res.json())
    .then(recipes => {
        console.log('Fetched data:', recipes);
        recipes.forEach(recipe => {
            const recipeItem = document.createElement('div');
            const titleElement = document.createElement('p');
            const ingredientsList = document.createElement('p')
            recipeItem.innerText = recipe.title;
            ingredientsList.innerText = recipe.ingredients;
            titleElement.innerText = recipe.instructions; 
            titleElement.style.border = 'solid 10px black';
            titleElement.style.padding = '10px';
            recipesDiv.appendChild(recipeItem);
            recipeItem.appendChild(ingredientsList);
            recipeItem.appendChild(titleElement);
        })
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
submitQuery.addEventListener("click", () => {
    fetchData();
});




