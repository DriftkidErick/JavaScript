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
    }

    get IsValid() //read Only
    {
        let result = false;

        if (this.fname == "" || GotBadWords(this.fname) == true)
        {
            result = false;
        }

        else if(GotBadWords(this.mname) == true)
        {
            result = false;
        }

        else if (this.lname == "" || GotBadWords(this.lname) == true)
        {
            result = false;
        }

        else if (this.street1 == "" || GotBadWords(this.street1) == true)
        {
            result = false;
        }

        else if (GotBadWords(this.street2) == true)
        {
            result = false;
        }

        else if (this.city == "" || GotBadWords(this.city) == true)
        {
            result = false;
        }

        else if (this.state == "" || IsStateGood(this.state) == false)
        {
            result = false;
        }
        
        else if(this.zip == "" || isZipCode(this.zip) == false)
        {
            result = false;
        }

        else if(isPhoneValid(this.homeNum) == false)
        {
            result = false;
        }

        else if(isPhoneValid(this.workNum) == false)
        {
            result = false;
        }

        else if(isPhoneValid(this.cellNum) == false || this.cellNum == "")
        {
            result = false;
        }

        else if(IsValidEmail(this.email) == false)
        {
            result = false;
        }

        else if(isValidDOB(this.dob) == false || this.dob =="")
        {
            result = false;
        }

        else if(this.credits < 0 || this.credits == "")
        {
            result = false;
        }
        
        else if(this.people < 0 || this.people == "")
        {
            result = false;
        }

        else if(GotBadWords(this.notes))
        {
            result = false;
        }

        else
        {
            result = true;
        }

        return result;

    }

    toString()
    {
        return `First Name: ${this.fname}   Last Name: ${this.lname}`;
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

        str += "\nNext Person";
        return str;
    }
}