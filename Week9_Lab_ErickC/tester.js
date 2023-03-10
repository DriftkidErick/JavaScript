"use strict";

const domain = "https://jsonplaceholder.typicode.com";

const getTodo = async userId =>
{
  if (userId < 1 || userId > 10)
  {
    return Promise.reject(new Error("User ID must be between 1 - 10"));
  }

  else
  {
    
    const req1 = await fetch(`${domain}/users/${userId}`)
    //const r1 = await fetch(`${domain}/todos/${userId}`);
    const user = await req1.json();


    const req2 = await fetch(`${domain}/users/${userId}/todos`);
    const todo = await req2.json();
    user.todo = todo

    return user;
  }

  
};

const displayUserData = user =>
{
    
    let html = ``;
    
    html += `<p>Name: ${user.name}</p>`;
    html += `<p>Username: ${user.username}</p>`;
    html += `<p>Email: ${user.email}</p>`;
    html += `<p>Phone: ${user.phone}</p>`;

    html += `<h3>Tasks</h3>`

    //Here im going to build a for loop to get each object to print
    var i = 0;
    for(i = 0; i < user.todo.length; i++)
    {
      html += `<p>Todo list: <br>Id: ${user.todo[i].id} <br>Title: ${user.todo[i].title} <br>Completion Status: ${user.todo[i].completed}</p>`;
    };
    

   
    
    $("#endGoal").html(html);

    
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
        const user_id = $("#todo_id").val(); //Get the photo ID from text box
        
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


