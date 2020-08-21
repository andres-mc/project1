// API  https://www.themealdb.com/api/json/v1/1/search.php?s=


async function siteData(recipe) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`

  try {
    const response = await axios.get(url)
    console.log(response.data)
    let recipes = response.data.meals
    console.log(recipes)
    removeRecipe()
    showRecipeData(recipes)
    return response
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

function showRecipeData(data) {
  
  for (let i = 0; i < data.length; i++) {
    let recipeInfo = `
    <h1 id="titleRp" class="titleBar">${data[i].strMeal}</h1> 
    <div class="imgIngWrapper">
      <img id="recipeImg" src="${data[i].strMealThumb}" alt="" style=" width=550px ; height=auto ">
      <p class="imgIngWrapper"></br>${data[i].strMeasure1} of ${data[i].strIngredient1}</br>${data[i].strMeasure2} of ${data[i].strIngredient2}</p></br>${data[i].strMeasure3} of ${data[i].strIngredient3}</p></br>${data[i].strMeasure4} of ${data[i].strIngredient4}</p></br>${data[i].strMeasure5} of ${data[i].strIngredient5}</p></br>${data[i].strMeasure6} of ${data[i].strIngredient6}</p></br>${data[i].strMeasure7} of ${data[i].strIngredient8}</p></br>${data[i].strMeasure9} of ${data[i].strIngredient9}</p>
    </div>
    <p id="recipeTxt"><h2><b>Instructions</b></h2></br>${data[i].strInstructions}</p> `
 
    document.querySelector('#recipeAllInfo').insertAdjacentHTML('beforeend', recipeInfo)
  
}
 }   
const submit = document.querySelector('#getRecipe')
console.log(submit)
submit.addEventListener('click', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#userInput').value
 
  siteData(inputValue)
})

function removeRecipe() {

  const appendElement = document.querySelector('#recipeAllInfo')
  while (appendElement.lastChild) {
    appendElement.removeChild(appendElement.lastChild)
  }
}
 
