const $ = selector => document.querySelector(selector);

//How The names is calulated based on informaton
//Email take everything that is infront of the @ sign
//Fname we will take the first 3 letter of their name
//Season
//Ninja Turtle
//Food 

const join_list = evt => //When the Join button is clicked
{
   //Start of by gathering the information inputed in the text boxes
    let tempEmail = $("#email_1").value;
    let tempFname = $("#first_name").value;
    let tempSeason = $("#season").value;
    let tempNinja = $("#ninja") .value;
    let tempFood = $("#food").value;

    alert("Welcome lets see what name will be bestowed upon you!")

   //Start by making the email do stuff
   let tempPosition = tempEmail.indexOf("@",0); //Finds the position of the @ sign and take what what starts at the 0 position 

    tempEmail = tempEmail.substr(0, tempPosition);

    alert("Email: " + tempEmail);

   //First name //Were going to extract random 2 letter of their name
   let lenFirst = tempFname.length;

   tempFname = tempFname.substr(lenFirst -5, 2); //Sub 5 and copy 2 charcters

   alert(tempFname);

   //Season
    if (tempSeason.indexOf("a",0) > -1)
    {
        tempSeason = "a"
    }

    else if (tempSeason.indexOf("i",0) > -1 )
    {
        tempSeason = "i"
    }

    else
    {
        tempSeason = "u"
    }
    //Here i add names to tempSeason based on what season the user chose
    if (tempSeason == "a")
    {
        tempSeason = ""
    }

    else if (tempSeason == "i")
    {
        tempSeason = ""
    }

    else if (tempSeason == "u")
    {
        tempSeason = ""
    }
   

   



   //Ninja
   if (tempNinja.toLowerCase() == "leonardo")
   {
        alert("Leonardo was choosen")

        alert("Ninja Turtle: " + tempNinja) 

        tempNinja = "Justice"
   }

   else if (tempNinja.toLowerCase() == "donatello")
   {
        alert("Donatello was choosen")
        alert("Ninja Turtle: " + tempNinja) 

        tempNinja = "Wise"
   }

   else if (tempNinja.toLowerCase() == "raphael")
   {
        alert("Raphael  was choosen")
        alert("Ninja Turtle: " + tempNinja) 
        tempNinja = "Dark Side"
   }

   else if (tempNinja.toLowerCase() == "michelangelo")
   {
        alert("Michelangelo was choosen")
        alert("Ninja Turtle: " + tempNinja) 

        tempNinja = "Hope"
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

        tempFood = "King"

        alert("Food: " + tempFood) 
    }

    else if (tempFood == "Hamburger")
    {
        alert("Hamburger was choosen")

        tempFood = "Squire"

        alert("Food: " + tempFood)
    }

    else if (tempFood == "Hot Dog")
    {
        alert("Gross")

        tempFood = "Clown"

        alert("Food: " + tempFood) 
    }

    else if (tempFood == "Ice Cream")
    {
        alert("Ice Cream was choosen")

        tempFood = "Sweetheart"

        alert("Food: " + tempFood) 
    }


    //let jediName = tempNinja + tempFood + " of " + tempFname;

    //alert("Your Jedi name henceforth will be: " + jediName);



};


document.addEventListener("DOMContentLoaded", () =>
{
    //adds click event for the buttons
    $("#join_list").addEventListener("click", join_list);
    //$("#clear_form").addEventListener("click", clearForm);

    //set cursor back to the first text box
    $("#first_name").focus();    
});