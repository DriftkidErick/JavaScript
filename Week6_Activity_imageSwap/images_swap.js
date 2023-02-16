"use strict"

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () =>
{
    const caption = $("#caption"); //Grabs the main caption of "Catch and Release"
    const mainImage = $("#main_image"); //Grabs bottom of the site big image
    
    const imageLinks = $("#image_list").querySelectorAll("a"); //Grabs the thumb nails
    
    for ( let link of imageLinks ) 
    {
    
        const image = new Image(); 
        image.src = link.href;
        
        link.addEventListener("click", evt => 
        {
            mainImage.src = link.href;
            mainImage.alt = link.title;
            caption.textContent = link.title;
            
            evt.preventDefault();
        });
    }
    
    imageLinks[0].focus();
});