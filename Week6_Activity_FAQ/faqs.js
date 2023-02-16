"use strict";

const $ = selector => document.querySelector(selector);

let timer = null;
let counter = 5;

const goToTerms = () => 
{
    counter --; //This subtracts instead of adding
    if(counter == 0)
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

const toggle = evt =>
{
    const h2 = evt.currentTarget;
    const div = h2.nextElementSibling;
    
    h2.classList.toggle("minus");
    div.classList.toggle("open");

    evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () =>
{
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

    const h2Elements = faqs.querySelectorAll("#faqs h2");

    for (let h2Element of h2Elements)
    {
        h2Element.addEventListener( "click", toggle);
    }

    h2Elements[0].firstChild.focus(); 
});