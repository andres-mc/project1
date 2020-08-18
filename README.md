# Project Overview

## Project Name

F##d Craver

## Project Description


"F##d Craver" is an application whose interest is to help people to reach their future gastronomic experience, based on their preferences or cravings at the time they navigate in the application, providing complete recipes, so they can create them step by step

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

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api 
- Render data on page 
- Allow user to choose favorites 

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add second API
- Use local storage to save user favorites

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|August 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|August 17| Project Approval | Incomplete
|August 18| Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 19| Initial Clickable Model  | Incomplete
|August 20| MVP | Incomplete
|August 21| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
