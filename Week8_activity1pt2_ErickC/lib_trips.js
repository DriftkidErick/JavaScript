"use strict";

//Class written to be a template for an object instance
class Trip
{
    //Constructor - runs when the instance is created. this verison expectes 3 parameters

    constructor(destination, miles, gallons)
    {
        this.destination = destination //Fill the local destination property with the destination parameter

        this.miles = parseFloat(miles); //Same for miles (remeber that we need to convert from text to numberics)

        this.gallons = parseFloat(gallons); //same for galls
    }

    get isValid() //read only
    {
        let result =  false;

        //if incoming values for miles and gallons are not numerc or are zero or less, return false, else return true

        if(this.destination == "" || isNaN(this.miles) || isNaN(this.gallons))
        {
            return false;
        }

        else if (this.miles <= 0 || this.gallons <= 0)
        {
            result = false;
        }

        else
        {
            result = true;
        }

        return result;
    }

    //Return result of mpg calc
    get mpg() //read only property 
    {
        return this.miles / this.gallons;
    }

    //returns a formatted string listing the data and calc
    toString()
    {
        const mpg = this.mpg.toFixed(1);
        return `${this.destination}: Miles - ${this.miles}; MPG - ${mpg}`;
    }
}

//Class that create an array to hold multiple trip instances

class Trips
{
    //Constructor declares the local array
    constructor()
    {
        this._trips = [];
    }

    //push function that recieves a trip instance and stores it if it is an actual trip object

    push(trip)
    {
        //only allow trip objects to be added to an array
        if(trip instanceof Trip)
        {
            this._trips.push(trip);
        }
    }

    //Accessor method to return the Total MPG among all trips
    get totalMpg()
    {
        let totalMiles = 0;
        let totalGallons = 0;

        for (let trip of this._trips)
        {
            totalMiles += trip.miles;
            totalGallons += trip.gallons;
        }

        return totalMiles / totalGallons;
    }

    //function to return a string listing out all trips, using each objects's to string function as well as total MPG

    toString()
    {
        let str = "";

        for (let trip of this._trips)
        {
            str += trip.toString() + "\n";
        }
        
        str += "\nCumulative MPG: " + this.totalMpg.toFixed(1);
        return str;

    }

}