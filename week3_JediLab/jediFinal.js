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

    //Validations 

    let isValid = true;

    //First name
    if (tempFname == "" || isNaN(tempFname) == false) //If Fname is empty
    {
        $("#first_name_error").textContent = "Name is Required!!";
        isValid = false; //this will turn the isValid to false (meaning its not valid now) )
    }

    else //If this is filled in
    {
        $("#first_name_error").textContent = ""; //removes the star next to the first name box
    }

    if (tempEmail == "" || !tempEmail.includes("@")) //If Emnail is empty
    {
        $("#email_1_error").textContent = "Email is Required!!";
        isValid = false; //this will turn the isValid to false (meaning its not valid now) )
    }

    else //If this is filled in
    {
        $("#email_1_error").textContent = ""; //removes the star next to the first name box
    }

    if (tempSeason == "" || isNaN(tempSeason) == false) //If Emnail is empty
    {
        $("#season_error").textContent = "Season is Required!!";
        isValid = false; //this will turn the isValid to false (meaning its not valid now) )
    }

    else //If this is filled in
    {
        $("#season_error").textContent = ""; //removes the star next to the first name box
    }

    if (tempNinja == "" || isNaN(tempNinja) == false) //If Emnail is empty
    {
        $("#ninja_error").textContent = "PICK A TURTLE";
        isValid = false; //this will turn the isValid to false (meaning its not valid now) )
    }

    else //If this is filled in
    {
        $("#ninja_error").textContent = ""; //removes the star next to the first name box
    }

    if (tempFood == "" || isNaN(tempFood) == false) //If Emnail is empty
    {
        $("#food_error").textContent = "Food is Required!!";
        isValid = false; //this will turn the isValid to false (meaning its not valid now) )
    }

    else //If this is filled in
    {
        $("#food_error").textContent = ""; //removes the star next to the first name box
    }


   //Start by making the email do stuff
   let tempPosition = tempEmail.indexOf("@",0); //Finds the position of the @ sign and take what what starts at the 0 position 

    tempEmail = tempEmail.substr(0, tempPosition);

    

   //First name //Were going to extract random 2 letter of their name
   let lenFirst = tempFname.length;

   tempFname = tempFname.substr(lenFirst -5, 2); //Sub 5 and copy 2 charcters

   

   //Season
    if (tempSeason.indexOf("a",0) > -1)
    {
        tempSeason = "a"
    }

    else if (tempSeason.indexOf("i",0) > -1 )
    {
        tempSeason = "i"
    }

    else if (tempSeason.indexOf("u",0) > -1 )
    {
        tempSeason = "u"
    }

    else
    {
        tempSeason = ""
    }

    //Here i add names to tempSeason based on what season the user chose
    if (tempSeason == "a")
    {
        tempSeason = "The Rebel Alliance"
    }

    else if (tempSeason == "i")
    {
        tempSeason = "The New Republic"
    }

    else if (tempSeason == "u")
    {
        tempSeason = "The Resistance"
    }

   //Ninja
   if (tempNinja.toLowerCase() == "leonardo")
   {
        

        

        tempNinja = "Justice"
   }

   else if (tempNinja.toLowerCase() == "donatello")
   {
        
        

        tempNinja = "Wise"
   }

   else if (tempNinja.toLowerCase() == "raphael")
   {
    
       
        tempNinja = "Dark Side"
   }

   else if (tempNinja.toLowerCase() == "michelangelo")
   {
        
       

        tempNinja = "Hope"
   }

   else
   {
        alert("I'm not sure if thats a Ninja Turtle so we're going to assume you picked Donatello ")

        tempNinja = "Donatello"
        
   }


   //Food 
    if (tempFood == "Pizza")
    {
       
        
        tempFood = "King"
    }

    else if (tempFood == "Hamburger")
    {
        

        
        tempFood = "Squire"
    }

    else if (tempFood == "Hot Dog")
    {
        alert("Gross")
        alert("Who's favorite food is hot dogs?")

        
        tempFood = "Jester"
    }

    else if (tempFood == "Ice Cream")
    {
        

        
        tempFood = "Sweetheart"

    }

    else
    {
        tempFood = "Darth"
    }


    let jediName = tempEmail + tempFname + " " + tempFood + " " + tempNinja + " of " + tempSeason;

    if (isValid == false)
    {
        evt.preventDefault();
        $("#error").textContent = "Please fill in all required fields.";
    }
    else if (isValid == true)
    {
       

        alert("Your Jedi name henceforth will be: " + jediName);
    }

   

};

const clearForm = () => //This is the clear function 
{
    //clear text boxes
    $("#first_name").value = "";
    $("#email_1").value = "";
    $("#season").value = "";
    $("#ninja").value = "";
    $("#food").value = "";
 

    //clears the span element 
    $("#first_name_error").textContent = "*";
    $("#email_1_error").textContent = "*";
    $("#season_error").textContent = "*";
    $("#ninja_error").textContent = "*";
    $("#food_error").textContent = "*";

    //clear the area of calculations
    $("#error").textContent = "";

    //set cursor back to the first text box
    $("#email_1").focus();

};


document.addEventListener("DOMContentLoaded", () =>
{
    //adds click event for the buttons
    $("#join_list").addEventListener("click", join_list);
    $("#clear_form").addEventListener("click", clearForm);

    //set cursor back to the first text box
    $("#email_1").focus();    
});