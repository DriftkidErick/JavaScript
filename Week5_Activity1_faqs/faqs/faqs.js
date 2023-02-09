"use strict";
// the event handler for the click event of each h2 element
const toggle = evt =>
{
    const h2Element = evt.currentTarget; //gets clicked H2 element
    
    const divElement = h2Element.nextElementSibling; ////gets clicked div element
    
    h2Element.classList.toggle( "minus"); 
    divElement.classList.toggle( "open");
    
    // get the clicked h2 // get h2's sibling
    evt.preventDefault(); // cancel default action of h2 tag's <a> tag };
}

document.addEventListener("DOMContentLoaded", () => 
{
    // get the h2 tags
    const h2Elements = faqs.querySelectorAll("#faqs h2");
    // attach event handler for each h2 tag
    for (let h2Element of h2Elements) { h2Element.addEventListener("click", toggle);
})

// set focus on first h2 tag's <a> tag
h2Elements[0].firstChild.focus(); });