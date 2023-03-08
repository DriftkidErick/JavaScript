//Here I am Creating a Person Class

"use strict";

//Class written to be a template for an object instance
class Person
{
    constructor({fname, mname, lname, street1, street2, city, state, zipCode, homeNum, workNum, cellNum, email, dob, credits, inhabitants, notes })
    {
        this.fname = fname; 

        this.mname = mname;

        this.lname = lname;

        this.street1 = street1;

        this.street2 =  street2;

        this.city = city;

        this.state = state;

        this.zipCode = zipCode;

        this.homeNum = homeNum;

        this.workNum = workNum;

        this.cellNum = cellNum;

        this.email = email;

        this.dob = dob;

        this.credits =credits;

        this.inhabitants = inhabitants;

        this.notes = notes;

        this.feedback = ""; //This is a string for feedback
    }

    get IsValid() 
    {
        let result = true;
        

        if (this.fname == "" || GotBadWords(this.fname) == true)
        {
            this.feedback += " \nInvalid first name \n";
            result = false;
        }

        if(GotBadWords(this.mname) == true)
        {
            this.feedback += " Invalid middle name\n";
            result = false;
        }

        if (this.lname == "" || GotBadWords(this.lname) == true)
        {
            this.feedback += " Invalid last name\n";
            result = false;
        }

        if (this.street1 == "" || GotBadWords(this.street1) == true)
        {
            this.feedback += " Invalid Street 1\n";
            result = false;
        }

        if (GotBadWords(this.street2) == true)
        {
            this.feedback += " Invalid Street 2\n";
            result = false;
        }

        if (this.city == "" || GotBadWords(this.city) == true)
        {
            this.feedback += " Invalid City\n";
            result = false;
        }

        if (this.state == "" || IsStateGood(this.state) == false)
        {
            this.feedback += " Invalid State\n";
            result = false;
        }
        
        if(this.zipCode == "" || isZipCode(this.zipCode) == false)
        {
            this.feedback += " Invalid Zip\n";
            result = false;
        }

        if(isPhoneValid(this.homeNum) == false)
        {
            this.feedback += " Invalid Home Number\n";
            result = false;
        }

        if(isPhoneValid(this.workNum) == false)
        {
            this.feedback += " Invalid Work Number\n";
            result = false;
        }

        if(isPhoneValid(this.cellNum) == false || this.cellNum == "")
        {
            this.feedback += " Invalid Cell Phone Number\n";
            result = false;
        }

        if(IsValidEmail(this.email) == false)
        {
            this.feedback += " Invalid entry for Email\n";
            result = false;
        }

        if(isValidDOB(this.dob) == false || this.dob =="")
        {
            this.feedback += " Invalid date of birth\n";
            result = false;
        }

        if(this.credits < 0 || this.credits == "")
        {
            this.feedback += " Invalid Credit amount\n";
            result = false;
        }
        
        if(this.inhabitants < 0 || this.inhabitants == "")
        {
            this.feedback += " Invalid people amount\n";
            result = false;
        }

        if(GotBadWords(this.notes))
        {
            this.feedback += " Ivalid notes\n";
            result = false;
        }

        return result;
        
    }

    toString()
    {
        return `\nFirst Name: ${this.fname} 
        <br>Middle Name:${this.mname} 
        <br>Last Name: ${this.lname} 
        <br>Street 1: ${this.street1} 
        <br>Street 2: ${this.street2} 
        <br>City:${this.city}
        <br>State: ${this.state} 
        <br>ZipCode: ${this.zipCode}
        <br>Home #: ${this.homeNum} 
        <br>Work #: ${this.workNum} 
        <br>Cell #: ${this.cellNum}
        <br>Email: ${this.email} 
        <br>DOB: ${this.dob}
        <br>Credits: ${this.credits} 
        <br>Inhabitants: ${this.inhabitants}
        <br>Notes: ${this.notes}`;

    }
}

