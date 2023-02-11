"use strict";

const $ = selector => document.querySelector(selector);

const displayErrorMsgs = msgs => 
{
    //create a new ul element
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    //create a new LI element for each error message, add to ul
    for (let msg of msgs)
    {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    //if ul node isnt in document yet, add it
    const node = $("ul");
    if (node == null)
    {
        //get the form element
        const form = $("form");

        //add ul to parent of form, before the form
        form.parentNode.insertBefore(ul, form.nextElementSibling);
    }
    else
    {
        //replace existing ul node
        node.parentNode.replaceChild(ul, node);
    }
}

const processEntries = () =>
{
    //get form controls to check for validity
    const email = $("#email_address");
    const phone = $("#phone");
    const country = $("#country");
    const terms = $("#terms");

    //create array for error messages
    const msgs = [];

    //check user entries for validity
    if(email.value == "" )
    {
        msgs[msgs.length] = "Please enter an email address.";
    }
    else if (IsValidEmail(email.value) == false)
    {
        msgs[msgs.length] = "Please enter a valid email address.";
    }
    
    if (phone.value == "")
    {
        msgs[msgs.length] = "Please enter a phone number";
    }
    else if (isPhoneValid(phone.value) == false)
    {
        msgs[msgs.length] = "Please enter a valid phone number";
    }

    if (country.value == "")
    {
        msgs[msgs.length] = "Please select a country";
    }
    

    if(terms.checked == false)
    {
        msgs[msgs.length] = "You must agree to the Terms of Service";
    }

    //submit the form or notify user of errors
    if(msgs.length == 0)
    {
        $("form").submit();
    }
    else
    {
        displayErrorMsgs(msgs);
    }

};

const resetForm = () =>
{
    $("form").reset();

    //Remove error messages
    $("ul").remove();

    $("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () =>
{
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);
    $("#email_address").focus();
});

//Functions
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

function isPhoneValid(strPhone)
{
    const phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im; //Only allows 10 digits and () and -

    if(phoneReg.test(strPhone))
    {
        return true;
    }
    else
    {
        return false;
    }
}

