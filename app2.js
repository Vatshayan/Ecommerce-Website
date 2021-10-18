
 

console.log('hi');
$(".signUpButton").click(function () {
    console.log('hi from the sign up button')
    $("#signUpModal").style("display", "block")
});

$('#quantityOfUnicornsForm').submit(function(e) {
    e.preventDefault()
    var numberOfUnicorns = $("#quantityOfUnicorns option:selected").text()
    console.log($("#quantityOfUnicorns option:selected").text())
    $("#cartItems").text(numberOfUnicorns)
});



// $('#signUpBtn').modal('hide');

                        


     