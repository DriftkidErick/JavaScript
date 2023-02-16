"use strict"

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () =>
{
    const caption = $("#caption")

    const mainImage = $("#main_image")

    const imageList = $("#pic_list").querySelectorAll("a");

    for (let list of imageList)
    {
        const image = new Image();
        image.src = list.href;

        list.addEventListener("mouseover", evt =>
        {
            mainImage.src = list.href;
            mainImage.alt = list.title;
            caption.textContent = list.title;
            
            evt.preventDefault();
        });
    }

    imageList[0].focus();

});