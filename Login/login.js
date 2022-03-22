$(document).ready(function() {
    $("#signup").click(function(){
        $("#signin-tab").fadeOut('fast');
        setTimeout(function(){
            $("#signup-tab").fadeIn("fast");
        }, 250);
        $("#signup").css("color", "#47C1B9");
        $("#signin").css("color", "#FAFAFA");
    }); 
  
    $("#signin").click(function() {
        $("#signup-tab").fadeOut('fast');
        setTimeout(function(){
            $("#signin-tab").fadeIn("fast");
        }, 250);
        $("#signin").css("color", "#47C1B9");
        $("#signup").css("color", "#FAFAFA");        
    });
});