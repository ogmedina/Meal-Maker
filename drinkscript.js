// HTML Elements
var searchBarElement = $("#searchBar")

var query = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

//event listeners

$("#searchButton").on("click", function (event) {
    event.preventDefault();

    if (searchBarElement.val() === '') {
        return;
    }

    var queryURL = query + searchBarElement.val();

    searchDrink(queryURL);
})

function searchDrink(queryURL) {

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        var drinksArray = response.drinks
        console.log(drinksArray)

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
            var text = document.createTextNode(drinksArray[i].strDrink + ": ")
            description.append(text)
            description.append('<br>')
           
            //ingredients
            var ingredientsArray = gatherIngredients(); //TODO: should return an array of objects

            //directions
            text = document.createTextNode(drinksArray[i].strInstructions)
            description.append(text)


            newRow.append(description)
            $("#resultsContainer").append(newRow)
            $("#resultsContainer").append('<hr>')
        }

    })
}


// *******************************************