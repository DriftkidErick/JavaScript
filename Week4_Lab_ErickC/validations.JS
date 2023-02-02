const $ = selector => document.querySelector(selector)

// Functions ----------------------------------------------------------------

//Email Validation
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

//ZIPCODE TEST VALIDATION
function IsZipBad(strZip)
{
    goodNums = ["0","1","2","3","4","5","6","7","8","9"];

    //Assume the worst
    results = false

    for (val of goodNums)
    {
        if (isNaN(strZip) || strZip.length != 5)
        //Horray it passed
        results = true;
    }

    return results;
}

function IsStateGood(strState)
{
    goodStates = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

    //Assume it fails
    doesItPass = false;

    if (!isNaN(strState) && strState.length != 2)
        {
            //Darn it failed
            doesItPass = false; 
        }

        else
        {
            for (val of goodStates)
            {
                if (val == strState.toUpperCase())
                {
                    //Horray the val and strState are a match
                    doesItPass = true;
                }
            }
        }
        

    return doesItPass;

}

//Functions Close -----------------------------------------------------------

//When the Join button is clicked
const join_list = evt =>
{
    //Here we create the variables that connect to the html text boxes

    //Names
    let tempFname = $("#fname").value;
    let tempMname = $("#mname").value;
    let tempLname = $("#lname").value;

    //Address
    let tempSteet1= $("#street1").value;
    let tempStreet2 = $("#street2").value;
    let tempCity = $("#city").value;
    let tempState = $("#state").value;
    let tempZipCode = $("#zip").value;

    //Phone Numbers & Email
    let homePhone = $("#homeNum").value;
    let workPhone = $("#workNum").value;
    let cellPhone = $("#cellNum").value;
    let email = $("#email").value;

    //Digits
    let dob = $("#dob").value;
    let credits = $("#credits").value;
    let people = $("#people").value;

    //Notes
    let notes = $("#notes").value;

    //Here we start validating
    
    //create a validation var
    isValid = true;

    //Name validations

    //First name
    if (tempFname == "" || GotBadWords(tempFname) == true)
    {
        $("#fname_error").textContent = "Invalid first name";
        isValid = false;
    }

    else
    {
        $("#fname_error").textContent = "";
    }

    //Middle Name
    if (GotBadWords(tempMname) == true)
    {
        $("#mname_error").textContent = "Invalid middle name";
        isValid = false;
    }

    else
    {
        $("#mname_error").textContent = "";
    }

    //Last Name
    if (tempLname == "" || GotBadWords(tempLname) == true)
    {
        $("#lname_error").textContent = "Invalid last name";
        isValid = false;
    }

    else
    {
        $("#lname_error").textContent = "";
    }

    //Name Validations Done


    //Address Validations

    //Street 1
    if (tempSteet1 == "" || GotBadWords(tempSteet1) == true)
    {
        $("#street1_error").textContent = "Invalid Street 1"
        isValid = false;
    }
    else
    {
        $("#street1_error").textContent = "";
    }

    //Street 2
    if (GotBadWords(tempStreet2) == true)
    {
        $("#street2_error").textContent = "Invalid Street 1"
        isValid = false;
    }
    else
    {
        $("#street2_error").textContent = "";
    }

    //City
    if (tempCity == "" || GotBadWords(tempCity) == true)
    {
        $("#city_error").textContent = "Invalid City";
        isValid = false;
    }
    else
    {
        $("#city_error").textContent = "";

    }

    //State

    if(IsStateGood(tempState) == false)
    {
        $("#state_error").textContent = "Invalid State";
        isValid = false; 
    }
    else
    {
        $("#state_error").textContent = "";

    }

    //Zip Code

    if(IsZipBad(tempZipCode) == true)
    {
        $("#zip_error").textContent = "Invalid Zip";
        isValid = false; 
    }
    else
    {
        $("#zip_error").textContent = "";

    }


    //Address Validations Done


    if (isValid == false)
    {
        evt.preventDefault();
        $("#error").textContent = "Please fill in all required fields properly.";
    }

    else if (isValid == true)
    {
        $("#error").textContent = "";
    
    }


}

document.addEventListener("DOMContentLoaded", () =>
{
    //adds click event for the buttons
    $("#join_list").addEventListener("click", join_list);
    //$("#clear_form").addEventListener("click", clearForm);

    //set cursor back to the first text box
    $("#fname").focus();    
});
