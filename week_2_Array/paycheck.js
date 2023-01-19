const $ = selector => document.querySelector(selector)

//create arrays outside of the form
var names = [];
var payRate = [];
var wHours = [];
var grossArray = [];
var taxAmountArray = [];
var netArray = [];

const submit = form => //Once submit button is clicked all this is preformed
{
    var fname = $("#first_name").value;
    var rate = $("#wage").value; //This forces it to be stored as a num
    var hours = $("#hours").value;

    //Validations

    let isValid = true;
    
    //First Name validations
    if (fname == "")
    {
        $("#fname_error").textContent = "Hey, Doofus First Name is required!!";
        isValid = false; //this makes the function invalid and throws the error checker
    }

    else //If it is filled in
    {
        //Removes the * for First Name
        $("#fname_error").textContent = "";
    }

    //Rate
    if (isNaN(rate) || rate == "") //Invalid input
    {
        $("#wage_error").textContent = "Hourly Wage is required!";
        isValid = false;
    }

    else //Valid input
    {
        $("#wage_error").textContent = "";
    }

    //Hours
    if (isNaN(hours) || hours == "") //Invalid inputs
    {
        $("#hours_error").textContent = "Hours worked is required!";
        isValid = false;
    }

    else //Valid input
    {
        $("#hours_error").textContent = "";
    }

    //If there is any errors do not push information
    if (isValid == false)
    {
        form.preventDefault();
    }

    //Convert the strings into numbers
    var gRate = Number(rate) //g = good
    var gHours = Number(hours)

    //Here we store to an array
    names.push(fname);
    payRate.push(gRate);
    wHours.push(gHours);

    //Here we deal with Gross, tax and Net
    var taxAmount = 0;

    var gross = gRate * gHours;
    grossArray.push(gross); //stores gross to array

    if (gross < 500)
    {
        taxAmount = (gross * .15); //Here the user will be taxed at a 20% rate 
    } 

    else if (gross < 1000)
    {
        taxAmount = (gross * .2); //Here the user will be taxed at a 20% rate
    }

    else
    {
        taxAmount = (gross * .3); //Here the user will be taxed at a 20% rate
    }
    taxAmountArray.push(taxAmount);//stores taxAmount to array


    var net = gross - taxAmount;
    netArray.push(net); //Stores Net to array

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