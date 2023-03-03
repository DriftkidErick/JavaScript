"use strict";

/*
# localStorage.setItem("key", "value") -- Saves thje data/value in the item

# localStorage.getItem("key") -- GEts the data/value from the item
** can aslo access directly via localStorage.key, similar to accessing object properties**

# localStorage.removeItem("key") --Remove the item
# localStorage.clear() -- Removes all items
    same options for seessionStorafe. Local storage sticks around betwen session, session are delted when the browser closes

# JSON (JavaScript Object Notation)
# JSON.stringify(object) -- Returns a JSON string for the specified object or array
# JSON.parse(json_string)  --Returns an object or array that contains the data in JSON_string

*/

//Library for Storing& retrieving info in a JSON file
const storage = 
{
    //read the data in the JSON file
    retrieve()
    {
        const tasks = [];   //Set up an array for tasks
        const json = localStorage.tasks;    //Attemps to retrieve tasks from local storage

        if(json)    //If JSON object exisits
        {
            const taskArray = JSON.parse(json) //parse the Json string to taskArray

            for (let obj of taskArray) //For each record/object in this array push it to local array of tasks
            {
                tasks.push(new Task(obj)); //uses destructuring
            }
        }

        return tasks; //Return the filled in array
    },

    //Streingify, Converts array to JSON string
    store(tasks)
    {
        localStorage.tasks = JSON.stringify(tasks);
        alert(localStorage.tasks);
    },

    //clear will empty the tasks list in local storage
    clear()
    {
        localStorage.tasks = "";
    }

};