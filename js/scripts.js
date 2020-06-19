function Pizza(size) {
  this.toppings = [],
  this.size = size
}

/*Pizza.prototype.priceAdj = function() {
  let pizzaPrice;
  if (pizzaPrice = 15) {
    if (this.size === "Small") {
      pizzaPrice -= 5;
    } else if (this.size === "Large") {
      pizzaPrice += 5;
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
  
}*/

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    const inputPizzaSize = parseInt($("input:radio[name=size]:checked").val());
    const inputToppings = 

    const freshPizza = new Pizza(inputPizzaSize)
    console.log(freshPizza);
  //("#pizzacost").text(freshPizza.priceAdj());

  
  });
});
