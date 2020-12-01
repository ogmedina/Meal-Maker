var globalFoodArray = [];
var globalFoodIngredientsArray = [];

//When document is ready, hide menu items
$(document).ready(function(){
    $("#menu0").hide();
    $("#menu1").hide();
    $("#menu2").hide();
    $("#menu3").hide();
    $("#menu4").hide();
    $("#menu5").hide();
    $("#menu6").hide();
    $("#menu7").hide();
    $("#menu8").hide();
    $("#menu9").hide();
})

$("#foodSubmit").on("click", function(event){
    event.preventDefault();  
  //on foodSubmit click hide main menu
    $(".hidden").hide();
 //on foodSubmit click show menu items
    $("#menu0").show();
    $("#menu1").show();
    $("#menu2").show();
    $("#menu3").show();
    $("#menu4").show();
    $("#menu5").show();
    $("#menu6").show();
    $("#menu7").show();
    $("#menu8").show();
    $("#menu9").show();
   
var foodIngredient = $("#foodSearch").val();
var queryURL = "https://api.edamam.com/search?q=" + foodIngredient +  "&app_id=3a94af5c&app_key=dcd84ae2c299d0440ebdbbe0b34bfb80"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
   
    console.log(response);
    for (var i = 0; i < 10; i++){        
        var foodPicture = response.hits[i].recipe.image;
        var foodPictureEl = $("<a href = " + response.hits[i].recipe.url + "><img src =" + foodPicture + "></a>");        
        $("#food-pic" + i).append(foodPictureEl);
        var recipeName = response.hits[i].recipe.label;
        $("#ingredientSection" + i).prepend(recipeName);
        var ingredientARR = response.hits[i].recipe.ingredientLines;
        var ingredients = $("#ingredients" + i)        
        var buttonEl = $("<i>");
        buttonEl.addClass("far fa-heart button alert");
        buttonEl.text(" Favorite");  
        buttonEl.attr("data-name", [i])              
        $("#saveBtn" + i).append(buttonEl);

  
        for (var j = 0; j < ingredientARR.length; j++){                          
             var ingredientList = $("<li>" + ingredientARR[j] + "</li>");             
             ingredients.append(ingredientList);
         }
    }
    console.log(response.hits[0].recipe.ingredientLines);
    console.log(ingredientARR);    

    $("#saveBtn0").on("click", function (e){
        var name = $(e.target).data("name");
        var savedRecipe = {
            name: response.hits[name].recipe.label,
            ingredients: response.hits[name].recipe.ingredientLines,
            link: response.hits[name].recipe.url,
            img: response.hits[name].recipe.image
        };

        function quickNull(x){
            if(x == null){
                return true;
            }else{
                return false;
            }
        }
        
        addToFavorites();

        function addToFavorites(){
            var test = localStorage.getItem('food')
            if(quickNull(test)){
                var array = [];

                array.push(globalFoodArray)
                localStorage.setItem('food', JSON.stringify(array));
            } else{
                var globalFoodArray = JSON.parse(localStorage.getItem('food'));
                globalFoodArray.push(savedRecipe);
                localStorage.setItem('food', JSON.stringify(globalFoodArray));
            }

        }

        //var globalFoodArray = JSON.parse(localStorage.getItem('food'));
        //globalFoodArray.push(savedRecipe);
        //localStorage.setItem('food', JSON.stringify(globalFoodArray));



        console.log(savedRecipe);
        console.log("label : " + savedRecipe.name + " recipe : " + savedRecipe.ingredients + " sourceLink : " + savedRecipe.link);
       
    });
});
});

//Need to copy or fix on click function to create objects
//**********************************************
//Need to store objects in local storage
//need to make function for button image shift

//fas fa-heart


//$("#saveBtn0").on("click", function (e){
    //var name = $(e.target).data("name");
    //var savedRecipe = {
        //name: response.hits[name].recipe.label,
        //ingredients: response.hits[name].recipe.ingredientLines,
        //link: response.hits[name].recipe.url,
      //  img: response.hits[name].recipe.image
    //};
    //console.log(savedRecipe);
  //  console.log("label : " + savedRecipe.name + " recipe : " + savedRecipe.ingredients + " sourceLink : " + savedRecipe.link);

//});

