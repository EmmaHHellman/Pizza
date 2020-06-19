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
    const inputPizzaSize = parseInt($("input:radio[name=pizzasize]:checked").val());
    const freshPizza = new Pizza(inputPizzaSize);
    $(".pizzatoppings:checked").each(function () {
      freshPizza.toppings.push($(this).val())
    });
    
    const cost = freshPizza.priceAdj(freshPizza.toppings);
    $("#pizzaorder").show();
    $("#pizzacost").text(cost);
    

    console.log(freshPizza);
    
    

  
  });
});
