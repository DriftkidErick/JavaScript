"use strict";

$(document).ready(() => 
{

    //When click on the Join button
    $("#join_list").click(() => 
    {
        const email1 = $("#email_1").val();
        const email2 = $("#email_2").val();
        let isValid = true;

        //Validate the email
        if (email1 == "")
        {
            $("#email_1").next().text("This field is required");
            isValid = false;
        }
        else
        {
            $("#email_1").next().text("");
        }

        //validate the second email
        if (email2 == "")
        {
            $("#email_2").next().text("This field is required");
            isValid = false;
        }
        else if (email1 != email2)
        {
            $("#email_2").next().text("Invalid Email. Emails must match");
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

        //submit the form if everything is valid
        if (isValid)
        {
            $("#email_form").submit();
        }


    });


    $("#clear_form").click(() => 
    {
        $("#email_1").val("");
        $("#email_2").val("");
        $("#first_name").val("");

        //Clear the span
        $("#email_1").next().text("");
        $("#email_2").next().text("");
        $("#first_name").next().text("");

        $("#email_1").focus()
    });

    $("#email_1").focus()
});