"use strict";

const domain = "https://jsonplaceholder.typicode.com";

const getTodo = async id =>
{
    if (id < 1 || id > 200) //If the value is bad send and error msg
    {
        return Promise.reject( new Error("User ID must be between 1 and 200"));
    }

    else //Get the info across multiple fetchs, using "await" to help control flow
    {
        //Get the User based on the ID
        const req1 = await fetch(`${domain}/users/${id}/todos`);
        const user = await req1.json();
        
        
    }
    return user;
};



//Develop the HTML for Error msg (No async needed here)
const displayError = e =>
{
    let html = `<span>${e}</span>`;
    $("#toDo").html(html);
};

$(document).ready(()=> 
{
    //Set up Async button -click event
    $("#search_button").click(async () =>
    {
        const user_id = $("#toDo_id").val(); //Get the photo ID from text box

        try //try is used to protect from crashes if errors occur jumps to catch
        {
            const user = await getTodo(user_id); //Wait for the getPhoto to get us photo info may take a moment

            displayUserData(user); //Then display the photo data
        }

        catch(e)
        {
            displayError(e); //Catch any errors
            //Displays the erros intead of crashing
        }
    });
}) ;
