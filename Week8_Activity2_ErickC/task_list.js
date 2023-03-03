//this is more with buttons

"use strict";

const displayTasks = () =>
{
    taskList.sort(); //Sort the list before displaying

    let html = ""; //Clear the HTMl so we can refill from a clean slate

    //loop through the taskList and append Html code ot html string
    for(const task of taskList)
    {
        html += "<p><a href='#'>Delete</a>" + task.toString() + "</p>";

    }

    $("#tasks").html(html); //Use jQuery .html function to fill the DIV with ID = "tasks"

    //Add click event handler to each <a> element
    //Use jquery "find" to get array of links, then assign the click event to the "a" link tag

    $("#tasks").find("a").each((index,a) => 
    {
        $(a).click(evt =>
            {
                taskList.load().delete(index).save(); //Method chaing loads (including sort), deletes a specific task, then saves data

                displayTasks(); //Ready to re-display the list (sorted)
                evt.preventDefault(); //Stop from leaving
                $("input:first").focus(); //sets curso focus
            });
    });
}

$(document).ready(() => 
{
    $("#add_task").click(() =>
    {
        const taskObj = 
        {
            description: $("#task").val(), //Get the description
            dueDate: $("#due_date").val() //get the due date
        };
        
        const newTask = new Task(taskObj); //TaskObject

        //If new task is valid, load, list (sorts), add new task, save then display again
        if (newTask.isValid)
        {
            taskList.load().add(newTask).save();
            displayTasks();
            $("#task").val(""); //Clear form fields
            $("#due_date").val("");
        }

        else
        {
            //else display error message
            alert("Please enter a task and/or " + "a due date that is in the future");

        }
        $("#task").select(); //Move cursor focus and highlights
    });

    //Clear the form
    $("#clear_tasks").click(() => 
    {
        taskList.clear();
        $("#tasks").html("");
        $("#task").val("");
        $("#due_date").val("");
        $("#task").focus("");
    });

    //By default, when the page loads
    taskList.load() //Load the taskList
    displayTasks(); //Display in form
    $("#task").focus();
});