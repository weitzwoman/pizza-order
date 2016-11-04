// backend
function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings
}

PizzaOrder.prototype.cost = function() {

}

// UI
$(document).ready(function(){


  $("form#pizza-order").submit(function(event){
    event.preventDefault();

    $("input:checkbox[name=toppings]:checked").each(function(){
      var inputToppings = $(this).val();
      $("#receipt").append( + "<br>");
    });


  });
});
