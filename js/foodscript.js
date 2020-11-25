

$("#foodSubmit").on("click", function(event){
    event.preventDefault();
   // $("#menu").show();
    $(".hidden").hide();
    


   // $(".maintext").fadeOut();
var foodIngredient = $("#foodSearch").val();

var queryURL = "https://api.edamam.com/search?q=" + foodIngredient +  "&app_id=3a94af5c&app_key=dcd84ae2c299d0440ebdbbe0b34bfb80"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
   

    console.log(response);
    for (var i = 0; i < 9; i++){
        
        var foodPicture = response.hits[i].recipe.image;
        var foodPictureEl = $("<a href = " + response.hits[i].recipe.url + "><img src =" + foodPicture + "></a>");        
        $("#food-pic" + i).append(foodPictureEl);
        var recipeName = response.hits[i].recipe.label;
        $("#ingredientSection" + i).prepend(recipeName);
        var ingredientARR = response.hits[i].recipe.ingredientLines;
        var ingredients = $("#ingredients" + i)        
        var buttonEl = $("<button>");
        buttonEl.addClass("alert button");
        buttonEl.text("Favorite");
        
        $("#saveBtn" + i).append(buttonEl);

        for (var j = 0; j < ingredientARR.length; j++){                          
             var ingredientList = $("<li>" + ingredientARR[j] + "</li>");
             //var favoritesList = $("<a ")
             ingredients.append(ingredientList);
             

         }
    }

    console.log(response.hits[0].recipe.ingredientLines);
    console.log(ingredientARR);        
});
});

