"use strict";

//See this involves data and the posibility of protecting the data,
// We are creating an object with a calculated name based on the key: "task"

const tasks = Symbol("tasks");

//Class object to hold and manage an array of tasks

const taskList =
{
    //array of tasks - symbol with a key of "[task]"
    [tasks]: [],
    
    //load method that uses the storage librabry's retrieve function to load the array and return the object instance (itself)
    load()
    {
        this[tasks] = storage.retrieve();
        return this; //Reference to taskList object, so methods can be chained
    },

    //Method that stores the task list into a JSon File using the stroage library's store method. Returns the object instance
    save()
    {
        storage.store(this[tasks]);
        return this; //Reference to taskList object, so methods can be chained
    },

    //Sort method(s) that put tasls in order based on Due dates. Returns the object instance
    sort()
    {
        this[tasks].sort( (task1, task2) =>
        {
            if (task1.dueDate < task2.dueDate) //returns -1 if due Date for task1 is before task2
            {
                return -1;
            }

            else if (task1.dueDate > task2.dueDate) //returns 1 if due Date for task1 is after before task2
            {
                return 1;
            }

            else //returns 0 if they are equal
            {
                return 0;
            }
        });

        return this; // reference to tasklist object, so methods can be chained
    },

    //Method to push a new task onto the array
    add(task)
    {
        this[tasks].push(task);
        return this; 
    },

    //removes a specified item # from the array
    delete(i)
    {
        this.sort();
        this[tasks].splice(i, 1); //i is the starting point in the array where to delte and the 1 is how many items to delete

        return this; // reference to tasklist object, so methods can be chained
    },

    //Method to clear all items from JSON file
    clear()
    {
        storage.clear();
        return this; // reference to tasklist object, so methods can be chained
    },

    //iterator function using a generator function ("*"): Allows us to iterate or move through the array
    *[Symbol.iterator]()
    {
        for (let task of this [tasks])
        {
            yield task;
        }
    }
};

