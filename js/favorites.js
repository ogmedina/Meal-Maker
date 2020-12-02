var deleteButtonEl = document.getElementById('delete-button');

function food() {

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





var drinksArray = JSON.parse(localStorage.getItem("drinks"));
console.log(drinksArray);
function drink() {

  for (var i = 0; i < drinksArray.length; i++) {
    var newRow = $("<div></div>")
    newRow.attr('class', 'rowContainer')
    newRow.attr('data-index', i)
    var cardHeader = $("<div>" + "<h4>" + drinksArray[i].name + "</h4>" + "</div>")    // title of drink will be stored here
    cardHeader.attr('class', 'card-divider')
    newRow.append(cardHeader)
    //add the image
    var newImg = $("<img>")
    newImg.attr('src', drinksArray[i].image)
    newImg.attr('height', '120')
    newImg.attr('width', '180')
    newRow.append(newImg)
    var ingredients = $("<li></ul>") // ingredients to make drinks will be stored here
    ingredients.attr('class', 'Ingredients')
    newRow.append(ingredients)
    for (var j = 0; j < drinksArray[i].ingArray.length; j++) {
      ingredientsItem = $("<ul></ul>")
      ingredientsItem.attr('class', 'ingredientsItem')
      ingredientsItem.text(drinksArray[i].ingArray[j].ingredient + ": " + drinksArray[i].ingArray[j].measure)
      ingredients.append(ingredientsItem)
    }
    //directions
    var instructions = $("<div></div>")
    instructions.attr('class', "instructions")
    instructions.text(drinksArray[i].instructions)
    newRow.append(instructions)
    // button to remove from favorites
    var removeButton = $("<button></button>")
    removeButton.attr('class', 'button delete-button')
    removeButton.text("Delete")
    removeButton.attr('data-index', i)
    newRow.append(removeButton)
    $("#drink").append(newRow)
    $("#drink").append('<hr>')
  }
}

$("#drink").on('click', function (event) {
  event.preventDefault();
  if (event.target.matches('.delete-button')) {
    remove(event.target.dataset.index);
  }
})




function remove(index) {
  console.log(index);
  console.log(drinksArray)
  drinksArray.splice(index, 1);
  console.log(drinksArray);
  localStorage.setItem('drinks', JSON.stringify(drinksArray))
  refreshPage()
  //localStorage.removeItem('drinks'.[index]);

}

function refreshPage() {
  location.reload();
}
food();
drink();

