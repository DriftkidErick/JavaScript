"use strict";

const domain = "https://jsonplaceholder.typicode.com"; //Web Service Url 

//Function to retrieve photo and its data based on a phote ID (the free samples run 1 thru 5000)
const getPhoto = (id) => 
{
    if (id < 1 || id > 5000) //If the ID is invalid, promis is rejected similar to null or error with msg
    {
        return Promise.reject( new Error("Photo ID must be between 1 and 5000"));
    }

    else //Else fetch the photo using the domain Urlm photos folder and the specified ID
    {
        return fetch(`${domain}/photos/${id}`)
            .then( response => response.json()); //Resolves to Photo object
    }
};

//Get a photo album based on a specified photo and its Album ID
const getPhotoAlbum = photo =>
{
    return fetch(`${domain}/albums/${photo.albumId}`)
        .then( response => response.json()) //resolves to album object
        .then( album =>
            {
                photo.album = album; //Add album property
                return photo; //Wraps in Promise object
            });
};

//Get the user credited for the photo
const getPhotoAlbumUser = photo =>
{
    return fetch(`${domain}/users/${photo.album.userId}`)
        .then( response => response.json() ) //resolves to user object
        .then( user => 
            {
                photo.album.user = user; // add album.user property
                return photo;            // wraps in Promise object
            });
};

//Function to use the Photo information to generate the HTML output/content for a specific photo
// Concation is a web devs friend
const displayPhotoData = photo =>
{
    let html = `<img src="${photo.thumbnailUrl}" alt="${photo.title}">`;
    html += `<h4>Title: ${photo.title}</h4>`;
    html += `<p>Album:  ${photo.album.title}</p>`;
    html += `Posted by: ${photo.album.user.username}`;
    $("#photo").html(html);
};

//Function that receives an error and generates the error msg in an HTML span
const displayError = e =>
{
    let html = `<span>${e}</span>`;
    $("#photo").html(html);
};

//When the page document is loaded and ready, create the button click event and use the ID in the textbox to pull up the photo data in individual functions
//Notice the function chainging

$(document).ready(() =>
{
    $("#view_button").click(() =>
    {
        const photo_id = $("#photo_id").val();
        getPhoto(photo_id)
            .then(getPhotoAlbum)
            .then(getPhotoAlbumUser)
            .then(displayPhotoData)
            .catch(displayError);
    });
});