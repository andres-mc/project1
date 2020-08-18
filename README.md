# Project Overview

## Project Name

Meal Craver

## Project Description


"Meal Craver" is an application whose interest is to help people to reach their future gastronomic experience, based on their preferences or cravings at the time they navigate in the application, providing complete recipes, so they can create them step by step

## API and Data Sample

Main web page of the api selector for this project:
https://www.themealdb.com/api.php

Api's :
Search meal by name
https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
List all meals by first letter
https://www.themealdb.com/api/json/v1/1/search.php?f=a
Lookup full meal details by id
https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
Lookup a single random meal
https://www.themealdb.com/api/json/v1/1/random.php
Lookup a selection of 10 random meals (only available to $2+ Patreon supporters)
https://www.themealdb.com/api/json/v1/1/randomselection.php
List all meal categories
https://www.themealdb.com/api/json/v1/1/categories.php
Latest Meals (only available to $2+ Patreon supporters)
https://www.themealdb.com/api/json/v1/1/latest.php
List all Categories, Area, Ingredients
https://www.themealdb.com/api/json/v1/1/list.php?c=list
https://www.themealdb.com/api/json/v1/1/list.php?a=list
https://www.themealdb.com/api/json/v1/1/list.php?i=list
Filter by main ingredient
https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
Filter by multi-ingredient (only available to $2+ Patreon supporters)
https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast,garlic,salt
Filter by Category
https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
Filter by Area
https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

Sample JSON:
```json
{
    "meals": [
        {
            "idMeal": "52953",
            "strMeal": "Shrimp Chow Fun",
            "strDrinkAlternate": null,
            "strCategory": "Seafood",
            "strArea": "Chinese",
            "strInstructions": "STEP 1 - SOAK THE RICE NOODLES\r\nSoak the rice noodles overnight untill they are soft\r\nSTEP 2 - BOIL THE RICE NOODLES\r\nBoil the noodles for 10-15 minutes and then rinse with cold water to stop the cooking process of the noodles.\r\nSTEP 3 -MARINATING THE SHRIMP\r\nIn a bowl add the shrimp, egg, 1 pinch of white pepper, 1 Teaspoon of sesame seed oil, 1 Tablespoon corn starch and 1 tablespoon of oil\r\nMix together well\r\nSTEP 4 - STIR FRY\r\nIn a wok add 2 Tablespoons of oil, shrimp and stir fry them until it is golden brown\r\nSet the shrimp aside\r\nAdd 1 Tablespoon of oil to the work and then add minced garlic, ginger and all of the vegetables.\r\nAdd the noodles to the wok\r\nNext add sherry cooking wine, oyster sauce, sugar, vinegar, sesame seed oil, 1 pinch white pepper, and soy sauce\r\nAdd back in the shrimp\r\nTo thicken the sauce, whisk together 1 Tablespoon of corn starch and 2 Tablespoon of water in a bowl and slowly add to your stir-fry until it's the right thickness.",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/1529445434.jpg",
            "strTags": null,
            "strYoutube": "https://www.youtube.com/watch?v=wzaTcpoFEaY",
            "strIngredient1": "Rice Stick Noodles",
            "strIngredient2": "Prawns",
            "strIngredient3": "Egg",
            "strIngredient4": "Pepper",
            "strIngredient5": "Sesame Seed Oil",
            "strIngredient6": "Cornstarch",
            "strIngredient7": "Oil",
            "strIngredient8": "Minced Garlic",
            "strIngredient9": "Ginger",
            "strIngredient10": "Onion",
            "strIngredient11": "Bean Sprouts",
            "strIngredient12": "Spring Onions",
            "strIngredient13": "Cooking wine",
            "strIngredient14": "Oyster Sauce",
            "strIngredient15": "Sugar",
            "strIngredient16": "Vinegar",
            "strIngredient17": "Soy Sauce",
            "strIngredient18": "",
            "strIngredient19": "",
            "strIngredient20": "",
            "strMeasure1": "1/2 bag",
            "strMeasure2": "8 oz ",
            "strMeasure3": "1/2 ",
            "strMeasure4": "pinch",
            "strMeasure5": "2 tsp",
            "strMeasure6": "2 tbs",
            "strMeasure7": "4 tbs",
            "strMeasure8": "1 tsp ",
            "strMeasure9": "1 tsp ",
            "strMeasure10": "1/2 cup ",
            "strMeasure11": "1 cup ",
            "strMeasure12": "1/2 cup ",
            "strMeasure13": "1 tbs",
            "strMeasure14": "1 tbs",
            "strMeasure15": "1/2 tbs",
            "strMeasure16": "1/2 tbs",
            "strMeasure17": "1 tbs",
            "strMeasure18": "",
            "strMeasure19": "",
            "strMeasure20": "",
            "strSource": "https://sueandgambo.com/pages/shrimp-chow-fun",
            "dateModified": null
        }
    ]
}
```

## Wireframes

Homepage:
https://wireframe.cc/pro/pp/1ab1e1929366519

Display result:
https://wireframe.cc/pro/pp/1ab1e1929366519#um2zuxmp

Movile Version:

HP:
https://wireframe.cc/pro/pp/1ab1e1929366519#lmxhydf7

DR:
https://wireframe.cc/pro/pp/1ab1e1929366519#ty0fj7xi


### MVP/PostMVP 

#### MVP

- Show list of options to user 
- Save the selections as results
- Use them to find the results in the API data
- Render and allow user to navigate results 

#### PostMVP  

- User creates and saves personal list
- User share recipes, their food results & data into social media plataforms of their selection

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|

|August 17| Prompt / Wireframes / Priority Matrix / Timeframes | 90% Complete
|August 18| Project Approval & Core Application Structure (HTML, CSS, etc.) | 0% complete
|August 19| Initial Clickable Model  | 0% complete
|August 20| MVP | 0% complete
|August 21| Presentations | 0% complete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| skeleton creation | H | 5hrs| 5hrs | 5hrs |
| functions | H | 6hrs| 6hrs | 6hrs |
| Styles Look&feel | H | 6hrs| 6hrs | 6hrs |
| test & resolve issues | H | 3.5hrs| 3.5hrs | 3.5hrs |
| Total | H | 20.5hrs| 20.5hrs | 20.5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
