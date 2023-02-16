"use strict";

const $ = selector => document.querySelector(selector)

//When the Join button is clicked
const processEntries = evt =>
{
    //Here we create the variables that connect to the html text boxes

    //Names
    const tempFname = $("#fname");
    const tempMname = $("#mname");
    const tempLname = $("#lname");

    //Address
    const tempSteet1= $("#street1");
    const tempStreet2 = $("#street2");
    const tempCity = $("#city");
    const tempState = $("#state");
    const tempZipCode = $("#zip");

    //Phone Numbers & Email
    const homePhone = $("#homeNum");
    const workPhone = $("#workNum");
    const cellPhone = $("#cellNum");
    const email = $("#email");

    //Digits
    const dob = $("#dob");
    const credits = $("#credits");
    const people = $("#people");

    //Notes
    const notes = $("#notes");

    //Create an array for msgs
    const msgs = [];

    //Name validations---------------------------------------------------------------------------

    //First name
    if (tempFname.value == "")
    {
        msgs[msgs.length] = "Please enter your First name";
    }

    else if (GotBadWords(tempFname.value) == true)
    {
        msgs[msgs.length] = "Please remove the bad words from First name";
    }

    //Middle Name
    if(GotBadWords(tempMname.value) == true)
    {
        msgs[msgs.length] = "Please remove the bad words from Middle name";
    }
    
    if (tempLname.value == "")
    {
        msgs[msgs.length] = "Please enter your Last name";
    }

    else if (GotBadWords(tempLname.value) == true)
    {
        msgs[msgs.length] = "Please remove the bad words from Last name";
    }

    //Name Validations Done---------------------------------------------------------------------------


    //Address Validations---------------------------------------------------------------------------

    //Street 1
    if (tempSteet1.value == "")
    {
        msgs[msgs.length] = "Please enter Street 1";
    }

    else if (GotBadWords(tempSteet1.value) == true)
    {
        msgs[msgs.length] = "Please remove the bad words from Street 1";
    }

    //Street 2
    if (GotBadWords(tempStreet2.value) == true)
    {
        msgs[msgs.length] = "Please remove the bad words from Street 2";
    }
    
    //City
    if (tempCity.value == "")
    {
        msgs[msgs.length] = "Please enter the City";
    }

    else if (GotBadWords(tempCity.value) == true)
    {
        msgs[msgs.length] = "Please remove the bad words from City";
    }

    //State

    if (tempState.value == "")
    {
        msgs[msgs.length] = "Please enter State";
    }

    else if (IsStateGood(tempState.value) == false)
    {
        msgs[msgs.length] = "Please enter the appropriate State";
    }

    //Zip Code

    if (tempZipCode.value == "")
    {
        msgs[msgs.length] = "Please enter Zip Code";
    }

    else if (isZipValid(tempZipCode.value) == false)
    {
        msgs[msgs.length] = "Please enter the appropriate Zip Code";
    }


    //Address Validations Done---------------------------------------------------------------------------

    //Number and mail Validation---------------------------------------------------------------------------

    if (homePhone.value == "")
    {
        msgs[msgs.length] = "Please enter the Home Phone number";
    }

    else if (isPhoneValid(homePhone.value) == false)
    {
        msgs[msgs.length] = "Please enter the appropriate Home Phone number";
    }

    if (workPhone.value == "")
    {
        msgs[msgs.length] = "Please enter the Work Phone number";
    }

    else if (isPhoneValid(workPhone.value) == false)
    {
        msgs[msgs.length] = "Please enter the appropriate Work Phone number";
    }

    if (cellPhone.value == "")
    {
        msgs[msgs.length] = "Please enter the Cell Phone number";
    }

    else if (isPhoneValid(cellPhone.value) == false)
    {
        msgs[msgs.length] = "Please enter the appropriate Cell Phone number";
    }

    //Email Validations
    if(IsValidEmail(email.value) == false)
    {
        msgs[msgs.length] = "Please enter an appropriate Email Address";
    }


    //Number and mail Validation Done---------------------------------------------------------------------------

    //Misc---------------------------------------------------------------------------

    //Date of Birth
    if (isValidDOB(dob.value) == false || dob.value == "")
    {
        msgs[msgs.length] = "Please enter a Birthdate";
    }


    //Credits
    if (credits.value == "")
    {
        msgs[msgs.length] = "Please enter the amount of credits";
    }

    else if (minimumCredits(credits.value) == false)
    {
        msgs[msgs.length] = "Please enter the appropriate amount of credits";
    }

    //House Inhabitants
    if(minimumPeople(people.value) == false)
    {
        msgs[msgs.length] = "Please enter the appropriate amount of inhabitants";
    }
    

    //Notes
    if (GotBadWords(notes.value) == true)
    {
        msgs[msgs.length] = "Please remove the bad words from Notes";
    }


    //Misc Done---------------------------------------------------------------------------


   //submit the form or notify user of errors
    if(msgs.length == 0)
    {
        
        $("form").submit();
    }
    else
    {
        evt.preventDefault();
        displayErrorMsgs(msgs);        
    }
};

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
};


const resetForm = () =>
{
    $("form").reset();

    //Remove error messages
    $("ul").remove();

    $("#fname").focus();
};


document.addEventListener("DOMContentLoaded", () =>
{
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);
    $("#fname").focus();
});