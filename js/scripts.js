function Pizza(toppings, size) {
  this.toppings = toppings,
  this.size = size
}

Pizza.prototype.priceAdj = function() {
  let pizzaPrice;
  if (pizzaPrice = 10) {
    if (this.size === "Small") {
      pizzaPrice -= 1;
    } else if (this.size === "Large") {
      pizzaPrice += 1;
    } else if (this.size === "medium" ) {
      pizzaPrice -= 0;
    }
  }

  var selectedToppings = $('#toppings').val();

  for (let i = 0; i < selectedToppings; i++) {
    if(selectedToppings[i].length > 2) {
      if (selectedToppings[i] === true) {
        pizzaPrice -= .5;
      }
    } else {
      pizzaPrice -= 0;
    }
  }

  return pizzaPrice;
  
}

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
  event.preventDefault();
  });
});
