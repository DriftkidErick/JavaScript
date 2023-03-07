//Person class 

"use strict";

//Class written to be a template for an object instance
class Person
{
    constructor(fname, mname, lname, street1, street2, city, state, zip, homeNum, workNum, cellNum, email, dob, credits, people, notes )
    {
        this.fname = fname; 

        this.mname = mname;

        this.lname = lname;

        this.street1 = street1;

        this.street2 =  street2;

        this.city = city;

        this.state = state;

        this.zip = zip;

        this.homeNum = homeNum;

        this.workNum = workNum;

        this.cellNum = cellNum;

        this.email = email;

        this.dob = dob;

        this.credits =credits;

        this.people = people;

        this.notes = notes;

        this.feedback = ""; //This is a string for feedback
    }

    get IsValid() //read Only
    {
        let result = true;
        

        if (this.fname == "" || GotBadWords(this.fname) == true)
        {
            this.feedback += " Invalid first name \n";
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
        
        if(this.zip == "" || isZipCode(this.zip) == false)
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
        
        if(this.people < 0 || this.people == "")
        {
            this.feedback += " Invalid input amount\n";
            result = false;
        }

        if(GotBadWords(this.notes))
        {
            this.feedback += " Ivalid Input\n";
            result = false;
        }

        return result;
        
    }

    toString()
    {
        return `\nFirst Name: ${this.fname} 
        Middle Name:${this.mname} 
        Last Name: ${this.lname} 
        Street 1: ${this.street1} 
        Street 2: ${this.street2} 
        City:${this.city}
        State: ${this.state} 
        ZipCode: ${this.zip}
        Home #: ${this.homeNum} 
        Work #: ${this.workNum} 
        Cell #: ${this.cellNum}
        Email: ${this.email} 
        DOB: ${this.dob}
        Credits: ${this.credits} 
        Inhabitants: ${this.people}
        Notes: ${this.notes}`;

    }
}

class Persons
{
    //Constructor delcares the local array
    constructor()
    {
        this._persons = [];
    }

    //push function that recieves a person  instance and stores it if it is an actual person object

    push(person)
    {
        //only allow person objects to be added to an array
        if(person instanceof Person)
        {
            this._persons.push(person);
        }
    }

    toString()
    {
        let str = "";

        for (let person of this._persons)
        {
            str += person.toString() + "\n";
        }

        str += "\n\n";
        return str;
    }
}