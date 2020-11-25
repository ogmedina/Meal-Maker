// $("#food").append("<button>" + "hello there" + "</button>");
//
//$("button").addClass("float-center");
{/* <div class="card" style="width: 300px;">
  <div class="card-divider">
    This is a header
  </div>
  <img src="assets/img/generic/rectangle-1.jpg">
  <div class="card-section">
    <h4>This is a card.</h4>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
  </div>
</div> */}

function food() {
  // $("#food").append("<div class=" + "card foodCard" + ">" + "</div>");
  // $(".card").addClass("foodCard");
  // $(".foodCard").append("<div class=" + "card-divider" + ">" + "this is a header" + "</div>");
  // $(".foodCard").append("<img src=" + "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277__340.jpg" + ">");
  // $(".foodCard").append("<div class=" + "card-section" + ">" + "<h4>" + "this is a card" + "</h4>" + "</div>");
  // $(".foodCard").addClass("float-center"); 
  var newCard = $("<div></div>")
  newCard.attr('class', 'card')

  var cardHeader = $("<div>" + "<h4>" + "Food Title" + "</h4>" + "</div>")
  cardHeader.attr('class', 'card-divider')
  var img = $("<img>")
  img.attr('src', "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277__340.jpg")
  img.attr('height', '120')
  img.attr('width', '180')
  newCard.append(cardHeader)
  newCard.append(img);
  $("#food").append(newCard);
}

function drink() {
  // $("#drink").append("<div class=" + "card" + ">" + "</div>");
  // $(".card").addClass("drinkCard");
  // $(".drinkCard").append("<div class=" + "card-divider" + ">" + "this is a header" + "</div>");
  // $(".drinkCard").append("<img src=" + "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-413x516.jpg" + ">");
  // $(".drinkCard").append("<div class=" + "card-section" + ">" + "<h4>" + "this is a card" + "</h4>" + "</div>");
  // $(".drinkCard").addClass("float-center");
  //var Header = $("<div>" + "<h4>" + "Drink Title" + "</h4>" + "</div")
  // Header.attr('class', 'card-divider')

  //////////////////////////////////////////////////////////
  // var newRow = $("<div></div>")
  // newRow.attr('class', 'rowContainer')
  // var img = $("<img>")
  // img.attr('src', "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277__340.jpg")
  // img.attr('height', '120')
  // img.attr('width', '180')
  // var recipe = $("<p></p>")
  // recipe.attr('class', 'recipeInfo')
  // recipe.text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic")
  //////////////////////////////////////////////////////

  var newRow = $("<div></div>")
  newRow.attr('class', 'rowContainer')
  var cardHeader = $("<div>" + "<h4>" + "Drink Name" + "</h4>" + "</div>")    // title of drink will be stored here
  cardHeader.attr('class', 'card-divider')
  newRow.append(cardHeader)
  //add the image
  var newImg = $("<img>")
  newImg.attr('src', "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277__340.jpg")
  newImg.attr('height', '120')
  newImg.attr('width', '180')
  newRow.append(newImg)
  //add the ingredients
  var ingredients = $("<li></ul>") // ingredients to make drinks will be stored here
  ingredients.attr('class', 'Ingredients')
  newRow.append(ingredients)
  ingredientsItem = $("<ul></ul>")
  ingredientsItem.attr('class', 'ingredientsItem')
  ingredientsItem.text("ingredients go here")
  ingredients.append(ingredientsItem)

  ingredientsItem = $("<ul></ul>")
  ingredientsItem.attr('class', 'ingredientsItem')
  ingredientsItem.text("ingredients go here")
  ingredients.append(ingredientsItem)
  //directions
  var instructions = $("<div></div>")
  instructions.attr('class', "instructions")
  instructions.text("is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
  newRow.append(instructions)
  // button to remove from favorites
  var remove = $("<button></button>")
  remove.attr('class', 'delete-button')
  remove.text("Delete")
  newRow.append(remove)
  $("#drink").append(newRow)
  $("#drink").append('<hr>')
}

//img.append(recipe);
// newRow.append(cardHeader)
//newRow.append(recipe)
// newRow.append(img)
// newRow.append(recipe)
// $("#drink").append(newRow)


food();
drink();

