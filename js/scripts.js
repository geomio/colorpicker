$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const nameInput = $("input#name").val();
    const streetInput = $("input#street").val();
    const cityInput= $("input#city").val();
    const stateInput = $("input#state").val();
    const zipInput = $("input#zip").val();
    const countryInput = $("input#country").val();

    $(".name").text(nameInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);
    $(".country").text(countryInput);
    $("#hideme").show();
  
    event.preventDefault();
  });
 });
