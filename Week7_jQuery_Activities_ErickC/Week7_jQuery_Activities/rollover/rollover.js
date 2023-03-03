"use strict";

$(document).ready(() => 
{
    //process each img tag
    $("#image_rollovers img").each((index, img) => 
    {
        const oldURL = img.src; //gets the src attribute
        const newURL = img.id; //Get the id attribute

        //preload rollover image
        const rolloverImage = new Image();
        rolloverImage.src = newURL;

        //setup event handlers for hovering over an image
        $(img).hover( //use Jquery syntax to access hover() method

            () => img.src = newURL , //hover over
            () => img.src = oldURL //hover our
        );
    });
})