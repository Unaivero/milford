var main = function() {
  $('.dropdown img').click(function(){
  $('.dropdown-menu').toggle();  
  });

$('form').submit(function(){
  var email = $('#email').val();
  var password = $('#password').val();
    if(email === "" ){
    $('.email-error').text("Please enter your email.");  
  }     else
  {
    $('.email-error').text("");
  }
  
  if(password === ""){
    $('.password-error').text("Please enter your password.");
  }
      else
  {
    $('.password-error').text("");
  }
  return false;
});
};

$(document).ready(main);



  