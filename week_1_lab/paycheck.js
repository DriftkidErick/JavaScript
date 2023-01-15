const $ = selector => document.querySelector(selector)

const submit = form => //This is once the user clicks submit button
{
    const fname = $("#first_name").value;
    const rate = $("#wage").value;
    const hours = $("#hours").value;

    //Makes sure that boxes are filled out

    let isValid = true;

    //First name start
    if (fname == "") //if First name is empty throw and error
    {
        $("#fname_error").textContent = "First name is required!";
        isValid = false;
    }

    else //if it is filled in remove the * in span
    {
        $("#fname_error").textContent = "";
    }

    //rate start
    if (isNaN(rate)) //if wage name is not a number
    {
        $("#wage_error").textContent = "Hourly Wage should be a number!";
        isValid = false;
    }

    else if (rate == "")
    {
        $("#wage_error").textContent = "Hourly Wage is required!";
        isValid = false;
    }

    else
    {
        $("#wage_error").textContent = "";
    }

    //hours start
    if (isNaN(hours))
    {
        $("#hours_error").textContent = "Hours worked should be a number!";
        isValid = false;
    }

    else if (hours == "")
    {
        $("#hours_error").textContent = "Hours worked is required!";
        isValid = false;
    }
    else
    {
        $("#hours_error").textContent = "";
    }

    //If any errors are present do not save the information
    if (isValid == false)
    {
        form.preventDefault();
    }

    //Convert the strings into numbers
    payRate = Number(rate)
    payHours = Number(hours)

    //Create the equations
    const gross = rate * hours
    const taxAmount = gross * .2 //Gross rate taxed at a 20% rate
    const net = gross - taxAmount

    alert(`Hello ${fname} here are your results \nGross Pay: $${gross.toFixed(2)}  \nTax Amount: $${taxAmount.toFixed(2)}  \nNet Pay: $${net.toFixed(2)}`);
};

const clearForm = () => //This is the clear function
{
    //clear text boxes
    $("#first_name").value = "";
    $("#wage").value = "";
    $("#hours").value = "";

    //clears the span element 
    $("#fname_error").textContent = "*";
    $("#wage_error").textContent = "*";
    $("#hours_error").textContent = "*";

    //set cursor back to the first text box
    $("#first_name").focus();
};

document.addEventListener("DOMContentLoaded", () =>
{
    //adds click event for the buttons
    $("#submit").addEventListener("click", submit);
    $("#clear_form").addEventListener("click", clearForm);

    //set cursor back to the first text box
    $("#first_name").focus();    
});

