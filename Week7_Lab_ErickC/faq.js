"use strict";

$(document).ready(() =>
{
    //Start off by targeting all the h2 tags 
    $("#faq h2").click(evt =>
        {
            //When the h2 gets tagged
            const h2 = evt.currentTarget;

            //When the h2 is clicked switch from + to -
            $(h2).toggleClass("minus");

            //if the h2 class is not minus hid anything under it
            if ($(h2).attr("class") != "minus")
            {   
                $(h2).next().hide();
            }
            
            else //If the h2 class is minus show div information
            {
                $(h2).next().show();
            }
            
            evt.preventDefault();
            
        });

         //Here im setting the focus on the first h2 tag's <a> tag
        $("#faq").find("a:first").focus();
});