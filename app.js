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
      <img id="recipeImg" src="${data[i].strMealThumb}" alt="" style=" width:450px ; height=auto ">
      <p class="imgIngWrapper"></p>
    </div>
    <p id="recipeTxt"><h2><b>Instructions</b></h2></br>${data[i].strInstructions}</p> `
 
    document.querySelector('#recipeAllInfo').insertAdjacentHTML('beforeend', recipeInfo)
  
  let dest = document.querySelector('.imgIngWrapper')
  
  for (let i = 1; i <= 20; i++) {
      let objectName = `strIngredient${i}`
      let objectName2 = `strMeasure${i}`
    
      let createTag = document.createElement('p')
      createTag.append(data[i][objectName2])
      createTag.append(data[i][objectName])
      dest.append(createTag)
      
      console.log(data[i][objectName])
      return createTag
    }
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
 

function replaceYoutube(data) {
  const youtubeStr = "{data.strYoutube}"

  const watchStr = "watch?v="
  const youtubeLink = youtubeStr.replace(watchStr, 'embed/')
  return youtubeLink

}


let utubeLink = replaceYoutube()

// <iframe id="recipeYoutb" src="">${replaceYoutube(data[i].strYoutube)}</iframe>
//create for loop [ count how many ing mesr ]
  //create p tag string interpolation mesurements ingredients 
  //append imwrapper class line 44 
  // document.querySelector('#userInput').value
  // console.log(inputValue)