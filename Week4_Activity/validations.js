const $ = selector => document.querySelector(selector)

//Email specs: slambert@neit.edu
// Have 1 and only 1 @ (8)
// Atleast 1 char before the @
// 1 or more periods, we will focus on the last period (13)        
// at least 1 char for the domain (chars between the @ and last period)
//at least 2 chars after the last period  (Length: 16)

function IsValidEmail(strEmail) {

    results = true;         //Initialize results

    atPos = strEmail.indexOf("@", 0);   //Should return position or -1

    //If not found or first char
    if (atPos == -1 || atPos < 1) {
        results = false;
    }

    //If we find another @, we have an issue
    atPos2 = strEmail.indexOf("@", (atPos +1))
    if (atPos2 > -1) {
        results = false;
    }

    //Find the last Period
    lastPeriodPos = strEmail.indexOf(".", 0);
    if (lastPeriodPos == -1) {
        results = false;
    }

    tLastPeriodPos = lastPeriodPos;

    //while loop to continue finding periods until there are no more
    while (tLastPeriodPos > -1) {
        tLastPeriodPos = strEmail.indexOf(".", (tLastPeriodPos + 1))    //Look for next period
        //If we find another period, store its position
        if (tLastPeriodPos > -1) {  
            lastPeriodPos = tLastPeriodPos;
        }
    }


    //Is there at least one char between the @ and the last period
    if ((lastPeriodPos - atPos) < 2) {
        results = false;
    }

    alert("Last Period: " + lastPeriodPos + "  --  Length: " + strEmail.length);

    //get length of characters after the last period, make sure it >= 2
    if (strEmail.length - lastPeriodPos < 3) {
        results = false;
    }

    //We did all our tests, send the assumed results
    return results;
}


//Check for bad words
function GotBadWords(strAnything) {
    badWords = ["homework", "poop", "exam", "lecture", "test"];

    //Assume the good
    results = false;

    //Loop thru the list of bad words and see if we find any inside the "anything" string
    for (val of badWords) {
        if (strAnything.toLowerCase().indexOf(val) > -1) {
            results = true;
        }
    }

    //Return results
    return results;

}

const join_list = evt =>
{
    let tempFname = $("#fname").value;
    let tempEmail = $("#email").value;

    let isValid = true;

    //First Name validations
    if (tempFname == "" || GotBadWords(tempFname) == true) //If there is an error with the entry
    {
        $("#fname_error").textContent = "Invalid entry for First Name";
        isValid = false;

    }

    else
    {
        $("#fname_error").textContent = ""; //This will remove the * next to textbox for first name
    }

    //Email Validations
    if (tempEmail == "" || IsValidEmail(tempEmail) == false)
    {
    $("#email_error").textContent = "Invalid entry for Email"
        isValid = false;
    }

    else
    {
        $("#email_error").textContent = "";//This will remove the * next to textbox for email
    }

    if (isValid == false)
    {
        evt.preventDefault();
        $("#error").textContent = "Please fill in all required fields properly.";
    }

    else if (isValid == true)
    {
        $("#error").textContent = "";
        alert("Hey " + tempFname );
        alert("Your email is " + tempEmail);
    }

}

const clearForm = () =>
{
    //clears text boxes
    $("#fname").value = "";
    $("#email").value = "";

    //Clear span
    $("#fname_error").textContent = "*";
    $("#email_error").textContent = "*";

    //clear the area of calculations
    $("#error").textContent = "";

    //set cursor back to the first text box
    $("#fname").focus();

} 

document.addEventListener("DOMContentLoaded", () =>
{
    //adds click event for the buttons
    $("#join_list").addEventListener("click", join_list);
    $("#clear_form").addEventListener("click", clearForm);

    //set cursor back to the first text box
    $("#fname").focus();    
});
