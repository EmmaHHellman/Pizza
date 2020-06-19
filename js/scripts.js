function Pizza(size) {
  this.toppings = [],
  this.size = size
}

Pizza.prototype.priceAdj = function(toppingSelections) {
  let pizzaPrice = 0;
  for (let i = 0; i < toppingSelections.length; i++) {
    if (toppingSelections.length > 2) {
      let toppingsPrice = ((toppingSelections.length * .5) - 1)
      pizzaPrice += toppingsPrice
    }
    pizzaPrice = pizzaPrice + this.size;
    return pizzaPrice
  }
}

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    let inputPizzaSize = parseInt($("input:radio[name=pizzasize]:checked").val());
    const freshPizza = new Pizza(inputPizzaSize);
    $(".pizzatoppings:checked").each(function () {
      freshPizza.toppings.push($(this).val())
    });

    if (inputPizzaSize === 15) {
      var pizzaSize = "Small"
    } else if (inputPizzaSize === 20) {
      pizzaSize = "Medium"
    } else if (inputPizzaSize === 25) {
      pizzaSize = "Large"
    }
    
    const cost = freshPizza.priceAdj(freshPizza.toppings);
    $("#pizzaorder").show();
    $("#pizzacost").text(cost);
    
    $("#size").text(pizzaSize);
    $("#toppings").text(freshPizza.toppings.join(", "));

  });
});
