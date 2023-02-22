"use strict";

$(document).ready(() =>
{
    //Start off by preloading the imgs
    $("#image_list a").each((index, link) => 
    {
        const image = new Image();
        image.src = link.href;

    });

    //set up event hanflers for links
    $("#image_list a").click( evt => 
        {
            //get clicked <a> tag
            const link = evt.currentTarget;

            //swap image
            $("#main_image").attr("src", link.href);

            //swap Caption
            $("#caption").text(link.title);

            //cancel the defauilt action of the link
            evt.preventDefault();

        });

        //move focus to first thumbnail
        $("li:first-child a").focus();
});