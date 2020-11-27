// HTML Elements
var searchBarElement = $("#searchBar")


//global variables
var globalDrinksArray = []; 
var globalIngredientsArray = [];
var query = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

//event listeners
$("#resultsContainer").on('click', function(event){
    event.preventDefault();
    if(event.target.matches('.favoriteButton')){
        addToFavorites(globalDrinksArray[event.target.dataset.index])
    }
})

$("#searchButton").on("click", function (event) {
    event.preventDefault();

    if (searchBarElement.val() === '') {
        return;
    }
    var queryURL = query + searchBarElement.val();
    searchDrink(queryURL);
})

// functions
function addToFavorites(drinkObj){

    var test = localStorage.getItem('drinks')
    if(quickNull(test)){
        //there is no local storage 'drinks'
        var array = [];

        var formattedDrinkObject = formatObject(drinkObj)

        array.push(formattedDrinkObject)
        localStorage.setItem('drinks', JSON.stringify(array));
    }else{

        //there is a local storage item 'drinks'
        var dataArray = JSON.parse(localStorage.getItem('drinks'))
        var formattedDrinkObj = formatObject(drinkObj)
        dataArray.push(formattedDrinkObj)
        localStorage.setItem('drinks', JSON.stringify(dataArray))
    }
}

function formatObject(object){

    var newObject = {
        name: object.strDrink,
        ingArray: globalIngredientsArray,
        instructions: object.strInstructions,
        image: object.strDrinkThumb
    }
    return newObject
}

function searchDrink(queryURL) {
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        $('#resultsContainer').empty();
        $('#resultsContainer').prepend('<hr>')
        var drinksArray = response.drinks

        if(quickNull(drinksArray)){
            $('#resultsContainer').append('<h3>Sorry, no results were found with your search :(</h3>')
            return
        }
        globalDrinksArray = drinksArray
        for (var i = 0; i < drinksArray.length; i++) {
            var newRow = $("<div></div>")
            newRow.attr('class', 'rowContainer')
            newRow.attr('data-index', i)

            //add the image
            var newImg = $("<img>")
            newImg.attr('src', drinksArray[i].strDrinkThumb)
            newImg.attr('height', '120')
            newImg.attr('width', '180')

            newRow.append(newImg)
            
            //add the name and ingredients
            var description = $("<p></p>")
            description.attr('class', 'drinkInfo')

            //name
            description.append('<span>Name: </span>')
            var text = document.createTextNode(drinksArray[i].strDrink)
            description.append(text)
            description.append('<br>')
           
            //ingredients
            description.append('<span>Ingredients:</span><br>')
            // console.log(drinksArray)
            var ingredientsArray = gatherIngredients(drinksArray[i]);
            globalIngredientsArray = ingredientsArray;
            for(var j = 0; j < ingredientsArray.length; j++){
                var string = ingredientsArray[j].measure
                if(ingredientsArray[j].measure == null){
                    string = "To taste"
                 }

                description.append(ingredientsArray[j].ingredient + ': ' + string + '<br>')
            }

            //directions
            description.append('<span>Instructions: </span>')
            text = document.createTextNode(drinksArray[i].strInstructions)
            description.append(text)


            newRow.append(description)
            var newBtn = $('<button>Favorite</button>')
            newBtn.attr('class', 'button favoriteButton');
            newBtn.attr('data-index', i)
            
            $("#resultsContainer").append(newRow)
            $('#resultsContainer').append(newBtn)
            $("#resultsContainer").append('<hr>')
        }

    })
}

function createObject(ingredient, measure) {

    var newObj = {
        ingredient: ingredient,
        measure: measure
    }

    return newObj;
}

function quickNull(x){
    if(x == null){
        return true;
    }else{
        return false;
    }
}

// gatherIngredients puts ingredients of a drink into a usable array
function gatherIngredients(drinkBlock){
    var ingredientToMeasureArray = [];
    var ingredient;
    var measure;

    // start of large repeated code :C **********************************************

    for( var i = 1; i <= 15; i++){
        ingredient = drinkBlock["strIngredient" + i]
        measure = drinkBlock["strMeasure" + i]

        if(!quickNull(ingredient)){
            ingredientToMeasureArray.push(createObject(ingredient,measure))
        }

    }

    // ingredient = drinkBlock.strIngredient1
    // measure = drinkBlock.strMeasure1

//     if(!quickNull(ingredient)){
//         ingredientToMeasureArray.push(createObject(ingredient, measure));
//     } 
    
//     ingredient = drinkBlock.strIngredient2
//     measure = drinkBlock.strMeasure2

//     if(!quickNull(ingredient)){
//         ingredientToMeasureArray.push(createObject(ingredient, measure));
//     } 
    
//     ingredient = drinkBlock.strIngredient3
//     measure = drinkBlock.strMeasure3

//     if(!quickNull(ingredient)){
//         ingredientToMeasureArray.push(createObject(ingredient, measure));
//     } 

//     ingredient = drinkBlock.strIngredient4
//     measure = drinkBlock.strMeasure4

//     if(!quickNull(ingredient)){
//         ingredientToMeasureArray.push(createObject(ingredient, measure));
//     } 

//     ingredient = drinkBlock.strIngredient5
//     measure = drinkBlock.strMeasure5

//     if(!quickNull(ingredient)){
//         ingredientToMeasureArray.push(createObject(ingredient, measure));
//     } 

//     ingredient = drinkBlock.strIngredient6
//     measure = drinkBlock.strMeasure6

//     if(!quickNull(ingredient)){
//         ingredientToMeasureArray.push(createObject(ingredient, measure));
//     } 

//     ingredient = drinkBlock.strIngredient7
//     measure = drinkBlock.strMeasure7

//     if(!quickNull(ingredient)){
//         ingredientToMeasureArray.push(createObject(ingredient, measure));
//     } 

//     ingredient = drinkBlock.strIngredient8
//     measure = drinkBlock.strMeasure8

//     if(!quickNull(ingredient)){
//         ingredientToMeasureArray.push(createObject(ingredient, measure));
//     } 

//     ingredient = drinkBlock.strIngredient9
//     measure = drinkBlock.strMeasure9

//     if(!quickNull(ingredient)){
//         ingredientToMeasureArray.push(createObject(ingredient, measure));
//     } 

//     ingredient = drinkBlock.strIngredient10
//     measure = drinkBlock.strMeasure10

//     if(!quickNull(ingredient)){
//         ingredientToMeasureArray.push(createObject(ingredient, measure));
//     } 

//     ingredient = drinkBlock.strIngredient11
//     measure = drinkBlock.strMeasure11

//     if(!quickNull(ingredient)){
//         ingredientToMeasureArray.push(createObject(ingredient, measure));
//     } 

//     ingredient = drinkBlock.strIngredient12
//     measure = drinkBlock.strMeasure12

//     if(!quickNull(ingredient)){
//         ingredientToMeasureArray.push(createObject(ingredient, measure));
//     } 

//     ingredient = drinkBlock.strIngredient13
//     measure = drinkBlock.strMeasure13

//     if(!quickNull(ingredient)){
//         ingredientToMeasureArray.push(createObject(ingredient, measure));
//     } 

//     ingredient = drinkBlock.strIngredient14
//     measure = drinkBlock.strMeasure14
   
    
//     if(!quickNull(ingredient)){
//         ingredientToMeasureArray.push(createObject(ingredient, measure));
//     } 

//     ingredient = drinkBlock.strIngredient15
//     measure = drinkBlock.strMeasure15

//    if(!quickNull(ingredient)){
//         ingredientToMeasureArray.push(createObject(ingredient, measure));
//     } 

    // END ***************************************************************************
    console.log(ingredientToMeasureArray);
    return ingredientToMeasureArray;

    // [.strIngredient + 'x']
}


// *******************************************