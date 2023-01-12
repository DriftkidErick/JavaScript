const $ = selector => document.querySelector(selector)

const joinList = evt => {
    //Gets the user entries from the text boxes
    //Make sure to add the hashtag
    const email1 = $("#email_1").value;
    const email2 = $("#email_2").value;
    const firstname = $("#first_name").value;

    //Check the users entires

    let isValid = true;

    if (email1 == "")
    {
        $("#email_1_error").textContent = "Email is required!";
        isValid = false;
    }

    else
    {
        $("#email_1_error").textContent = "";
    }

    if (email1 != email2)
    {
        $("#email_2_error").textContent = "Emails must match!";
        isValid = false;
    }

    else
    {
        $("#email_2_error").textContent = "";
    }

    if (firstname == "")
    {
        $("#first_name_error").textContent = "First name is required!";
        isValid = false;
    }

    else
    {
        $("#first_name_error").textContent = "";
    }

    //If any errors are present do not save the information
    if (isValid == false)
    {
        evt.preventDefault();
    }
};

const clearForm = () =>
{
    //clear text boxes
    $("#email_1").value = "";
    $("#email_2").value = "";
    $("#first_name").value = "";

    //clears the span element 
    $("#email_1_error").textContent = "*";
    $("#email_2_error").textContent = "*";
    $("#first_name_error").textContent = "*";

    //set cursor back to the first text box
    $("#email_1").focus();
};

document.addEventListener("DOMContentLoaded", () =>
{
    //adds click event for the buttons
    $("#join_list").addEventListener("click", joinList);
    $("#clear_form").addEventListener("click", clearForm);

     //set cursor back to the first text box
     $("#email_1").focus();    
});

