const $ = selector => document.querySelector(selector)

// Functions ----------------------------------------------------------------

//Email Validation
function IsValidEmail(strEmail) 
{

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

function isValidDOB(strDOB)
{
    today = new Date();

    birthday = new Date(strDOB);

    doesItPass = true;

    if( birthday > today)
    {
        doesItPass = false;
    }

    return doesItPass;
}

function minimumCredits(intCredits)
{   
    minCred = 0;
    doesItPass = true;

    if(intCredits >= minCred)
    {
        doesItPass = true;
    }
    else
    {
        doesItPass = false;
    }
    return doesItPass;
}

function minimumPeople(intPeople)
{   
    minPeeps = 1;
    doesItPass = true;

    if(intPeople >= minPeeps)
    {
        doesItPass = true;
    }
    else
    {
        doesItPass = false;
    }
    return doesItPass;
}

//Here i gave up and learned regular expressions
function isPhoneValid(strPhone)
{
    phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;

    if(phoneReg.test(strPhone))
    {
        return true;
    }
    else
    {
        return false;
    }
}

//ZIPCODE TEST VALIDATION
function isZipValid(strZip)
{
    regexp = /^[0-9]{5}$/;

        if (regexp.test(strZip))
            {
            return true;
            }
        else
            {
            return false;
            }
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

    //Name validations---------------------------------------------------------------------------

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

    //Name Validations Done---------------------------------------------------------------------------


    //Address Validations---------------------------------------------------------------------------

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

    if(IsStateGood(tempState) == false || tempState == "")
    {
        $("#state_error").textContent = "Invalid State";
        isValid = false; 
    }
    else
    {
        $("#state_error").textContent = "";

    }

    //Zip Code

    if(isZipValid(tempZipCode) == false || tempZipCode == "")
    {
        $("#zip_error").textContent = "Invalid Zip";
        isValid = false; 
    }
    else
    {
        $("#zip_error").textContent = "";

    }


    //Address Validations Done---------------------------------------------------------------------------

    //Number and mail Validation---------------------------------------------------------------------------

    if(isPhoneValid(homePhone) == false)
    {
        $("#homeNum_error").textContent = "Invalid Home Number";
        isValid = false; 
    }
    else
    {
        $("#homeNum_error").textContent = "";

    }

    if(isPhoneValid(workPhone) == false)
    {
        $("#workNum_error").textContent = "Invalid Work Number";
        isValid = false; 
    }
    else
    {
        $("#workNum_error").textContent = "";

    }

    if(isPhoneValid(cellPhone) == false || cellPhone == "")
    {
        $("#cellNum_error").textContent = "Invalid Cell Phone Number";
        isValid = false; 
    }
    else
    {
        $("#cellNum_error").textContent = "";

    }

    //Email Validations
    if(IsValidEmail(email) == false)
    {
    $("#email_error").textContent = "Invalid entry for Email";
        isValid = false;
    }

    else
    {
        $("#email_error").textContent = "";//This will remove the * next to textbox for email
    }

    //Number and mail Validation Done---------------------------------------------------------------------------

    //Misc---------------------------------------------------------------------------

    //Date of Birth
    if(isValidDOB(dob) == false || dob == "")
    {
        $("#dob_error").textContent = "Invalid date of birth";
        isValid = false; 
    }
    else
    {
        $("#dob_error").textContent = "";

    }

    //Credits
    if(minimumCredits(credits) == false || credits == "")
    {
        $("#credits_error").textContent = "Invalid Credit amount";
        isValid = false; 
    }
    else
    {
        $("#credits_error").textContent = "";

    }

    //House Inhabitants
    if(minimumPeople(people) == false)
    {
        $("#people_error").textContent = "Invalid input amount";
        isValid = false; 
    }
    else
    {
        $("#people_error").textContent = "";

    }

    //Notes
    if (GotBadWords(notes) == true)
    {
        $("#notes_error").textContent = "Ivalid Input";
        isValid = false;
    }


    //Misc Done---------------------------------------------------------------------------


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

const clearForm = () =>
{

    //clears text boxes
    $("#fname").value = "";
    $("#mname").value = "";
    $("#lname").value = "";

    $("#street1").value = "";
    $("#street2").value = "";
    $("#city").value = "";
    $("#state").value = "";
    $("#zip").value  = "";

    $("#homeNum").value = "";
    $("#workNum").value = "";
    $("#cellNum").value = "";
    $("#email").value = "";

    $("#dob").value = "";
    $("#credits").value = "";
    $("#people").value = "";
    $("#notes").value = "";

    //Clear span
    $("#fname_error").textContent = "*";
    $("#mname_error").textContent = "";
    $("#lname_error").textContent = "*";

    $("#street1_error").textContent = "*";
    $("#street2_error").textContent = "";
    $("#city_error").textContent = "*";
    $("#state_error").textContent = "*";
    $("#zip_error").textContent  = "*";

    $("#homeNum_error").textContent = "*";
    $("#workNum_error").textContent = "*";
    $("#cellNum_error").textContent = "*";
    $("#email_error").textContent = "*";

    $("#dob_error").textContent = "*";
    $("#credits_error").textContent = "*";
    $("#people_error").textContent = "*";
    $("#notes_error").textContent = "*";

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
