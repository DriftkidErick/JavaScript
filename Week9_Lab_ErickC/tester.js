"use strict";

const domain = "https://jsonplaceholder.typicode.com";

const getUserInfo = async (userId) => {
    if (userId < 1 || userId > 200) {
    return Promise.reject(new Error("User ID must be between 1 and 200"));
    } 

    else {
    const userResponse = await fetch(`${domain}/users/${userId}`);
    const user = await userResponse.json();
    const todosResponse = await fetch(`${domain}/todos?userId=${userId}`);
    const todos = await todosResponse.json();
    return { user, todos };
    }
};

const displayUserInfo = (userInfo) => {
    let html = `<h3>User Information:</h3>`;
    html += `<p>Name: ${userInfo.user.name}</p>`;
    html += `<p>Email: ${userInfo.user.email}</p>`;
    html += `<p>Phone: ${userInfo.user.phone}</p>`;
    html += `<p>Website: ${userInfo.user.website}</p>`;
    html += `<h3>To-Do List:</h3>`;
    if (userInfo.todos.length === 0) 
    {
    html += `<p>This user has no to-do items.</p>`;
    } 

    else 
    {
        html += `<ul>`;
        userInfo.todos.forEach((todo) => {
            const completedText = todo.completed ? "Completed" : "Not Completed";
            html += `<li><strong>${todo.title}</strong>: ${completedText}</li>`;
        });
        html += `</ul>`;
    }
    $("#user-info").html(html);
};

const displayError = (error) => {
  let html = `<p>${error.message}</p>`;
  $("#user-info").html(html);
};

$(document).ready(() => {
  $("#search_button").click(async () => {
    const userId = $("#user-id").val();
    try {
      const userInfo = await getUserInfo(userId);
      displayUserInfo(userInfo);
    } catch (error) {
      displayError(error);
    }
  });
});
