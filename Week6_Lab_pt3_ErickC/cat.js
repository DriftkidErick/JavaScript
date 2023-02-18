"use strict";

const $ = selector => document.querySelector(selector);

let timer = null;
let counter = 10;

const goToTerms = () => //This will send user to terms page if they dont agree
{
    counter --;

    if (counter == 0)
    {
        window.location.href = "terms.html";
    }

    else
    {
        $("#seconds").textContent = counter;        
    }

};

const acceptTerms = () =>
{
    clearInterval( timer ); //This clears the timer
    $("#terms").setAttribute("class","hidden") //sets hidden css to terms id
};

document.addEventListener("DOMContentLoaded", () =>
{
    //This is for the clicking of the accepted button
    const i = window.location.href.indexOf("accepted");
    if(i == -1)
    {
        timer = setInterval(goToTerms, 1000); //Makes the number goes down by 1 second
        $("#accept").addEventListener("click", acceptTerms);
    }
    else
    {
        $("#terms").setAttribute("class","hidden");
    }

    //This is for the slide show
    const caption = $("#caption");                                  
    const mainImage = $("#main_cat");                            

    const links = $("#cool_Cat").querySelectorAll("a");          

    const imageCache = [];
    let image = null;
    for ( let link of links ) 
    {
        
        image = new Image();
        image.src = link.href;
        image.alt = link.title;
        
        imageCache[imageCache.length] = image;
    }

    
    let imageCounter = 0;
    setInterval( () => { 

        imageCounter = (imageCounter + 1) % imageCache.length;
        
        image = imageCache[imageCounter];

        mainImage.src = image.src;
        mainImage.alt = image.alt;
        caption.textContent = image.alt;
    },
    3000);  // 3 second 


});