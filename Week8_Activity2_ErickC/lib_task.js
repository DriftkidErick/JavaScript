"use strict";

//Task Class

class Task
{
    //Constructor that recieves the Descritption and future due date
    constructor({description, dueDate})
    {
        this.description = description; //Grab the description as-is
    
        if (dueDate)
        {
            this.dueDate = new Date(dueDate); //If dueDate exists, take it 
        }

        else
        {
            this.dueDate = new Date(); //Else create a new date object and set it to next month

            this.dueDate.setMonth(this.dueDate.getMonth() + 1);
        }
    } 
    
    get isValid()
    {
        let result = true;
        const today = new Date(); //Due date must be in future

        if (this.description == "") //Descrition is required
        {
            result = fasle;
        }

        if (this.dueDate.getTime() <= today.getTime()) //If its a past date
        {
            result = false;        
        }

        return result;
    }

    //String returning instance results
    toString()
    {
        return `${this.description}<br> Due Date: ${this.dueDate.toDateString()}`;
    }
}