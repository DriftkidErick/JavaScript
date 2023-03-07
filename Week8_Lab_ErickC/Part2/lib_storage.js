"use strict";

//Library for Storing & retrieving Info in a Json file

const storage = 
{
    //read the data in From the JSON file
    retrieve()
    {
        const persons = []; //Set up an array for tasks
        const json = localStorage.persons; //Attempts to retrieve persons from local storage

        if(json) //If Json object exists
        {
            const personArray = JSON.parse(json); //Parses the json string to personArray

            for(let obj of personArray) //For each record/object in this array, push it to local array of persons
            {
                persons.push(new Person(obj)); //Uses destructuring
            }
        }

        return persons; //returns the filled in array
    },

    //Uses LocalStroage to store the persons implementing the person array

    store(persons)
    {
        localStorage.persons = JSON.stringify(persons);
        alert(localStorage.persons);
    },

    //Clear will empty the tasks list in local storage
    clear()
    {
        localStorage.persons = "";
    }
};