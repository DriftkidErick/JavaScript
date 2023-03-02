//This is used more for the button/page side of the application

"use strict";

//When the page is fully loaded..
$(document).ready(() =>
{
    $("#calculate").click(()=>
    {
        //set the miles based on the text box
        mpg.miles = parseFloat($("#miles").val());

        //Do the samer for the gallons
        mpg.gallons = parseFloat($("#gallons").val());

        //If the values are valid, preform the calculation and place the result in the web form

        //Else give error/feedback msg and put focus on miles text box

        if (mpg.isValid)
        {
            $("#mpg").val(mpg.calculate().toFixed(1));
            $("#miles").select();
        }

        else //If there is an error
        {
            alert("Both entries must be numeric and greater than zero");
            $("#miles").focus();
        }
    });

    //Clear event to clear form when clear buttons is clicked
    $("#clear").click(() => 
    {
        $("#miles").val("");
        $("#gallons").val("");
        $("#mpg").val("");

        $("#miles").focus();
    });

    //Set the focus at the very start, when page is loaded
    $("#miles").focus();

});