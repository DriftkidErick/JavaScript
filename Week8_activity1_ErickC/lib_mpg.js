"use strict";

//Class as a protoType, not an object Template

const mpg = 
{
    miles : 0, //Property
    gallons : 0, //Property

    //Method that checks for valid values in properties
    get isValid ()
    {
        let result = true;

        if(isNaN(this.miles) || isNaN(this.gallons)) //if not a number fail
        {
            result = false;
        }

        else if (this.miles <= 0 || this.gallons <= 0) //if less than or =0 fail
        {
            return false;
        }

        else
        {
            result = true;
        }

        return result //Returns the result
    },

    //function that can preform the MPg calculation and return the result(MPG)
    calculate()
    {
        return this.miles / this.gallons;
    }
};