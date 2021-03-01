$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const nameInput = $("input#name").val();
    const streetInput = $("input#street").val();
    const cityInput= $("input#city").val();
    const stateInput = $("input#state").val();
    const countryInput = $("input#country").val();
    const phoneInput = $("input#phone").val();
    const emailInput = $("input#email").val();
    const birthdayInput = $("input#birthday").val();
    const appoInput = $("input#appo").val();

    $(".name").text(nameInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".country").text(countryInput);
    $(".phone").text(phoneInput);
    $(".email").text(emailinput);
    $(".birthday").text(birthdayinput);
    $(".appo").text(appoinput);
  
    event.preventDefault();
  });
 });
