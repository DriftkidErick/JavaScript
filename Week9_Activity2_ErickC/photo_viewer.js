"use strict";

//"async" makes this function asynchronous and "await " tells JS to wait until the promise is settled then return the result

const domain = "https://jsonplaceholder.typicode.com";

//Async function to retrieve a photo and related data from various sources
const getPhoto = async id =>
{
    //If bad value for id, send a Promis.reject response with an error msg
    if (id < 1 || id > 5000)
    {
        return Promise.reject( new Error("Photo ID must be between 1 and 5000"));

    }

    else //Get the info across multiple fetches, using "await" to help control flow
    {
        //Get the photo based on the ID
        const r1 = await fetch(`${domain}/photos/${id}`);
        const photo = await r1.json();

        //Use the photo's album ID to pull up the album;s infor and place it within an album in the photo object
        const r2 = await fetch(`${domain}/albums/${photo.albumId}`)
        const album = await r2.json();
        photo.album = album;

        //Use the user Id from the photo album to gather the info for the user that is associated with the album
        const r3 = await fetch(`${domain}/users/${photo.album.userId}`)
        const user = await r3.json();
        photo.album.user = user;

        //return the filled in photo object with album and user info
        return photo; //automatically wrapped in a promise

    }
};

//Develop the html to display photo and date (no async needed here)
const displayPhotoData = photo =>
{
    let html = `<img src="${photo.thumbnailUrl}" alt=${photo.title}">`;
    html += `<h4>Title: ${photo.title}</h4>`;
    html += `<p>Album: ${photo.album.title}</p>`;
    html += `Posted by: ${photo.album.user.username}`;
    $("#photo").html(html);
};

//Develop the HTML for Error msg (No async needed here)
const displayError = e =>
{
    let html = `<span>${e}</span>`;
    $("#photo").html(html);
};

$(document).ready(()=> 
{
    //Set up Async button -click event
    $("#view_button").click(async () =>
    {
        const photo_id = $("#photo_id").val(); //Get the photo ID from text box

        try //try is used to protect from crashes if errors occur jumps to catch
        {
            const photo = await getPhoto(photo_id); //Wait for the getPhoto to get us photo info may take a moment

            displayPhotoData(photo); //Then display the photo data
        }

        catch(e)
        {
            displayError(e); //Catch any errors
            //Displays the erros intead of crashing
        }
    });
}) ;

