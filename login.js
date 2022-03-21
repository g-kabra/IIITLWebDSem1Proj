$(document).ready(function() {
    $("#signup").click(function(){
        $("#signin-tab").css("display", "none");
        $("#signup").css("color", "#47C1B9");
        $("#signin").css("color", "#FAFAFA");
        $("#signup-tab").css("display", "");
    }); 
  
    $("#signin").click(function() {
        $("#signup-tab").css("display", "none");
        $("#signin").css("color", "#47C1B9");
        $("#signup").css("color", "#FAFAFA");
        $("#signin-tab").css("display", "");
    });
});