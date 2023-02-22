"use strict";

$(document).ready (() => 
{
    //Handle click on Join List button
    $("#join_list").click (() => 
    {
        const email1 = $("#email_1").val();
        const email2 = $("#email_2").val();
        let isValid = true;

        //Validate email first
        if (email1 == "")
        {
            $("#email_1").next().text("This field is required");
            isValid = false;
        }
        else
        {
            $("#email_1").next().text("");
        }

        //Validate secondary email
        if (email2 == "")
        {
            $("#email_2").next().text("This field is required");
            isValid = false;
        }

        else if (email1 != email2)
        {
            $("#email_2").next().text("The emails must match");
            isValid = false;
        }

        else
        {
            $("#email_2").next().text("");
        }

        //Validate the first name
        if ($("#first_name").val() == "")
        {
            $("#first_name").next().text("This field is required");
            isValid = false;
        }

        else
        {
            $("#first_name").next().text("");
        }

        //Submit the form if all entries are valid
        if (isValid)
        {
            $("#email_form").submit();
        }

    });

    //click for the clear form
    $("#clear_form").click (() => 
    {
        //Clear text boxes
        $("#email_1").val("");
        $("#email_2").val("");
        $("#first_name").val("");

        //Reset the span element
        $("#email_1").next().text("*");
        $("#email_2").next().text("*");
        $("#first_name").next().text("*");

        $("#email_1").focus();
    });

    $("#email_1").focus();
});