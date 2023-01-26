const $ = selector => document.querySelector(selector);

//How The names is calulated based on informaton
//Email take everything that is infront of the @ sign
//Fname we will take the first 3 letter of their name

const join_list = evt => //When the Join button is clicked
{
   //Start of by gathering the information inputed in the text boxes
   let tempEmail = $("#email_1").value;
   let tempFname = $("#first_name").value;
   let tempSeason = $("#season").value;
   let tempNinja = $("#ninja") .value;
   let tempFood = $("#food").value;

   //Start by making the email do stuff
   let tempPosition = tempEmail.indexOf("@",0); //Finds the position of the @ sign and take what what starts at the 0 position 

   tempEmail = tempEmail.substr(0, tempPosition);

   alert("Email: " + tempEmail);

   //First name
   

   //Season

   //Ninja
   if (tempNinja == "Leonardo")
   {
        alert("Leonardo was choosen")

        alert("Ninja Turtle: " + tempNinja) 
   }

   else if (tempNinja == "Donatello")
   {
        alert("Donatello was choosen")
        alert("Ninja Turtle: " + tempNinja) 
   }

   else if (tempNinja == "Raphael")
   {
        alert("Raphael  was choosen")
        alert("Ninja Turtle: " + tempNinja) 
   }

   else if (tempNinja == "Michelangelo")
   {
        alert("Michelangelo was choosen")
        alert("Ninja Turtle: " + tempNinja) 
   }

   else
   {
        alert("I'm not sure if thats a Ninja Turtle so we're going to assume you picked Donatello ")

        tempNinja = "Donatello"
        alert("Ninja Turtle: " + tempNinja) 
   }


   //Food 
    if (tempFood == "Pizza")
    {
        alert("Pizza was choosen")

        alert("Food: " + tempFood) 
    }

    else if (tempFood == "Hamburger")
    {
        alert("Hamburger was choosen")

        alert("Food: " + tempFood)
    }

    if (tempFood == "Hot Dog")
    {
        alert("Gross")

        alert("Food: " + tempFood) 
    }

    if (tempFood == "Ice Cream")
    {
        alert("Ice Cream was choosen")

        alert("Food: " + tempFood) 
    }



};


document.addEventListener("DOMContentLoaded", () =>
{
    //adds click event for the buttons
    $("#join_list").addEventListener("click", join_list);
    //$("#clear_form").addEventListener("click", clearForm);

    //set cursor back to the first text box
    $("#first_name").focus();    
});