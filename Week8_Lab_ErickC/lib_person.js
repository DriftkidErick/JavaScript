//Person class 

"use strict";

//Class written to be a template for an object instance
class Person
{
    constructor(fname, lname, street1, city, state, zip, homeNum, workNum, cellNum, email, dob, credits, people )
    {
        this.fname = fname; 

        this.lname = lname;

        this.street1 = street1;

        this.city = city;

        this.state = state;

        this.zip = parseInt(zip);

        this.homeNum = homeNum;

        this.workNum = workNum;

        this.cellNum = cellNum;

        this.email = email;

        this.dob = dob.DateTime.now();

        this.credits = parseInt(credits);

        this.people = parseInt(people);
    }

    get IsValid() //read Only
    {
        let result = false;

        if (this.fname == "" || GotBadWords(this.fname) == true)
        {
            result = false;
        }

        if (this.lname == "" || GotBadWords(this.lname) == true)
        {
            result = false;
        }

        if (this.street1 == "" || GotBadWords(this.street1) == true)
        {
            result = false;
        }

        if (this.city == "" || GotBadWords(this.city) == true)
        {
            result = false;
        }

        if (this.state == "" || IsStateGood(this.state) == false)
        {
            result = false;
        }
        
        if(this.zip == "" || isZipValid(this.zip) == false)
        {
            result = false;
        }

        if(isPhoneValid(this.homeNum) == false)
        {
            result = false;
        }

        if(isPhoneValid(this.workNum) == false)
        {
            result = false;
        }

        if(isPhoneValid(this.cellNum) == false || this.cellNum == "")
        {
            result = false;
        }

        if(IsValidEmail(this.email) == false)
        {
            result = false;
        }

        if(isValidDOB(this.dob) == false || this.dob =="")
        {
            result = false;
        }

        if(minimumCredits(this.credits) == false || this.credits == "")
        {
            result = false;
        }
        
        if(minimumPeople(this.people) == false)
        {
            result = false;
        }

    }

    toString()
    {
        return `${this.fname}  ${this.lname}`
    }


}