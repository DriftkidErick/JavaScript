
const $ = selector => document.querySelector(selector);

function IsValidEmail(strEmail) 
{

    var results = true;         //Initialize results

    const atPos = strEmail.indexOf("@", 0);   //Should return position or -1

    //If not found or first char
    if (atPos == -1 || atPos < 1) {
        results = false;
    }

    //If we find another @, we have an issue
    const atPos2 = strEmail.indexOf("@", (atPos +1))
    if (atPos2 > -1) {
        results = false;
    }

    //Find the last Period
    var lastPeriodPos = strEmail.indexOf(".", 0);
    if (lastPeriodPos == -1) {
        results = false;
    }

    var tLastPeriodPos = lastPeriodPos;

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

    //alert("Last Period: " + lastPeriodPos + "  --  Length: " + strEmail.length);

    //get length of characters after the last period, make sure it >= 2
    if (strEmail.length - lastPeriodPos < 3) {
        results = false;
    }

    //We did all our tests, send the assumed results
    return results;
}

const processEntries = () => 
{

    // get form controls to check for validity 

    const email = $("#email_address");
    const phone = $("#phone");
    const country = $("#country");
    const terms = $("#terms");

    //Check users entries for validity 
    let isValid = true;

    if(email.value == "" )
    {
        email.nextElementSibling.textContent = "This field is required";
        isValid = false;
    }
    else if (IsValidEmail(email.value) == false)
    {
        email.nextElementSibling.textContent = "Please enter a valid email!!!";
        isValid = false;
    }
    else
    {
        email.nextElementSibling.textContent = "";
    }

    if (phone.value == "")
    {
        phone.nextElementSibling.textContent = "This is a required field";
        isValid = false;
    }
    else if (isPhoneValid(phone.value) == false)
    {
        phone.nextElementSibling.textContent = "Please enter a valid phone number";
        isValid = false;
    }
    else
    {
        phone.nextElementSibling.textContent = "";
    }

    if (country.value == "")
    {
        country.nextElementSibling.textContent = "This field is required";
        isValid = false;
    }
    else
    {
        country.nextElementSibling.textContent = "";
    }

    if(terms.checked == "")
    {
        terms.nextElementSibling.textContent = "This field is required";
        isValid = false;
    }
    else
    {
        terms.nextElementSibling.textContent = "";
    }

    //This doesnt't allow to push the information if there is an errors 

    if (isValid == false)
    {
        processEntries.preventDefault();
    }
    else
    {
        $("form").submit();
    }
};

const resetForm = () => 
{
    $("form").reset();

    $("#email_address").nextElementSibling.textContent = "*"; 
    $("#phone").nextElementSibling.textContent = "*"; 
    $("#country").nextElementSibling.textContent = "*"; 
    $("#terms").nextElementSibling.textContent = "*"; 
    $("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () =>
{
    $("#register").addEventListener("click", processEntries); 
    $("#reset_form").addEventListener("click", resetForm); 
    $("#email_address").focus();
});

//Here are the functions



function isPhoneValid(strPhone)
{
    phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im; //Only allows 10 digits and () and -

    if(phoneReg.test(strPhone))
    {
        return true;
    }
    else
    {
        return false;
    }
}