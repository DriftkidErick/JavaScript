"use strict";

//returns date string in YYYY-MM-DD format
const getDateString = date =>
    `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

//Function to generate the HTML to Display the image or video based on JSON data passed in

const displayPicture = data =>
{
    let html = ""; //created an empty string
    
    if(data.error) //Error message
    {
        html += `<span class="error">${data.error.message}</span>`;
    }

    else if (data.code) //Problem - display message
    {
        html += `<span class="error">${data.msg}</span>`;
    }

    else //Success - Display image/video data
    {
        const width = 700;

        switch (data.media_type)
        {
            case "image":
                html += `<img src="${data.url}" width="${width}" alt="NASA photo">`;
                break;

            case "video":
                html += `<iframe src="${data.url}" frameborder="0" allowfullscreen></iframe>`;
                break;
            
            default:
                html += `<img src="images/notavailable.png" width="${width}" alt="NASA photo">`;
        }

        //data and copyright
        html += `<div>${data.date}`;

        if(data.copyright)
        {
            html += `<span class="right">&copy; ${data.copyright}</span>`;
        }

        html += "</div>";

        //explanation
        html += `<p>${data.explanation}</p>`;
    }

    //display html
    $("#display").html(html);
};

//Function to create an HTML error msg and display it
const displayError = error =>
{
    let html = `<span class="error">${error.message}</span>`;
    $("#display").html(html);
};

//Event handler function for the amount that the web page documented is loaded and ready 
$(document).ready(() => 
{
    //On load we will get todays date in YYYY-MM-DD format 
    const today = new Date();
    let dateStr = getDateString(today);

    //Set Today's date in textbod
    const dateTextbox = $("#date");
    dateTextbox.val(dateStr);
    dateTextbox.focus(); //Focus on dateTextbox

    //Set the event handler for View button's Click event
    $("#view_button").click(() => 
    {
        //Get the date from the textbox
        dateStr = $("#date").val();
        const dateObj = new Date(dateStr); //set dateObj = to dateStr pulled from text box

        //if it is a bad date, display an error msg
        if (dateObj == "Invalid Date")
        {
            const msg = "Please enter a valid date in the YYYY-MM-DD format";
            $("#display").html(`<span class="error">${msg}</span>`);
            
        }

        else
        {
            //Make sure date string is in proper format
            dateStr = getDateString(dateObj);

            //Build URL for API request
            const domain = `https://api.nasa.gov/planetary/apod`; //Domain url

            const request = `?api_key=DEMO_KEY&date=${dateStr}`; //Additional params including date

            const url = domain + request; //Merges the two

            //Get the picture data and use it to display picture or call an error
            fetch(url)
                .then(response => response.json())
                .then( json => displayPicture(json))
                .catch( e => displayError(e));
        }

        $("#date").focus(); //Set cursor here
    });
});
