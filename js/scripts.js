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

 const toppingSelect = this.toppings;

    for (let i = 0; i < toppingSelect.length; i++) {
    if(this.toppingSelect[i].length > 2) {
      if (this.toppingSelect.length[i] === true) {
        pizzaPrice += .5;
      }
    } else {
      pizzaPrice += 0;
    }
  }

  return pizzaPrice;
  
}

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    const inputPizzaSize = $("select#size").val()
    const inputToppings = $("#toppings").val()

    const freshPizza = new Pizza(inputToppings, inputPizzaSize)
  ("#pizzacost").text(freshPizza.priceAdj());

  
  });
});
