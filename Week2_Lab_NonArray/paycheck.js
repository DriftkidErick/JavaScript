const $ = selector => document.querySelector(selector)

let average = 0;
var count = 0;
let finalNet = 0;


const submit = evt => //Once the submit button is clicked
{
    var fname = $("#first_name").value;
    var rate = $("#wage").value;
    var hours = $("#hours").value;

    //Validations

    let isValid = true; 

    //fname validations
    if (fname == "") //If Fname is empty
    {
        $("#fname_error").textContent = "Name is Required!!";
        isValid = false; //this will turn the isValid to false (meaning its not valid now) )
    }

    else //If this is filled in
    {
        $("#fname_error").textContent = ""; //removes the star next to the first name box
    }

    //Rate
    if (isNaN(rate) || rate == "") //If rate is not a number or blank
    {
        $("#wage_error").textContent = "Hourly Wage is required!";
        isValid = false;//this will turn the isValid to false (meaning its not valid now) )
    }

    else //Valid input
    {
        $("#wage_error").textContent = "";//removes the star next to the hourly wage box
    }

    //hours
    if (isNaN(hours) || hours == "") //Invalid inputs
    {
        $("#hours_error").textContent = "Hours worked is required!";
        isValid = false;
    }

    else //Valid input
    {
        $("#hours_error").textContent = "";
    }

    //If there is any error prevent the information from being pushed
    if (isValid == false)
    {
        evt.preventDefault();
        $("#error").textContent = "Please fill in all required fields.";
    }

    //Convert the strings into numbers
    var gRate = Number(rate) //g = good
    var gHours = Number(hours)

    //Here we deal with Gross, tax and Net
    var taxAmount = 0;

    var gross = gRate * gHours;


    if (gross < 500)
    {
        taxAmount = (gross * .15); //Here the user will be taxed at a 15% rate 
    } 

    else if (gross < 1000)
    {
        taxAmount = (gross * .2); //Here the user will be taxed at a 20% rate
    }

    else
    {
        taxAmount = (gross * .3); //Here the user will be taxed at a 30% rate
    }


    var net = gross - taxAmount;
    

    

    var html = document.querySelector("#total");

    var finalMessage = `<hr><br>${fname}<br> Gross Pay: $${gross.toFixed(2)} <br> Tax Amount: $${taxAmount.toFixed(2)} <br> Net Pay: $${net.toFixed(2)}`;

    if (isValid != false)
    {
        html.innerHTML += finalMessage
        count++;
        finalNet += net;
    }

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

    //clear the area of calculations
    $("#total").textContent = "";

    //set cursor back to the first text box
    $("#first_name").focus();

    //Sets net array to 0
    finalNet = 0;
    average = 0;
    count = 0;
    sum = 0;
};


const averageBtn = () => //this calulates the average income
{

    let sum = 0;

    sum += finalNet / count;
    
    if (isNaN(sum))
    {
        alert(`Average income is not available. Please add more information`);
    }

    else
    {
        alert(`Hey the average income is ${sum.toFixed(2)}`);
    }
};

document.addEventListener("DOMContentLoaded", () =>
{
    //adds click event for the buttons
    $("#submit").addEventListener("click", submit);
    $("#clear_form").addEventListener("click", clearForm);

    //set cursor back to the first text box
    $("#first_name").focus();    
});