"use strict"

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () =>
{
    const caption = $("#caption")
    const mainImage = $("#main_cat")

    const links = $("#cool_Cat").querySelectorAll("a"); //targets all the a tags

    const imageCache = [];
    let image = null;

    for (let link of links)
    {
        image = new Image();
        image.src = link.href;
        image.alt = link.title;
        
        imageCache[imageCache.length] = image
    }

    let picCounter = 0;
    setInterval( () => 
    {
        picCounter = (picCounter + 1) % imageCache.length; //Will not let images go over
        
        image = imageCache[picCounter]

        mainImage.src = image.src;
        mainImage.alt = image.alt;
        caption.textContent = image.alt
    },
    2000); // set a counter of 2 seconds
});