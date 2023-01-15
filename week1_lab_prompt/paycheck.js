"use strict";

let gross = 0;
let taxAmount = 0;
let net = 0;

const name = prompt("Please enter your name");

let wage = prompt("Please enter your hourly wage");
const payRate = parseFloat(wage);

let hours = prompt("Please enter how many hours you worked")
const hoursWorked = parseInt(hours);

gross = parseFloat(payRate * hoursWorked);

if (gross < 500)
{
   taxAmount = (gross * .15); //Here the user will be taxed at a 20% rate 
} 

else if (gross < 1000)
{
    taxAmount = (gross * .2); //Here the user will be taxed at a 20% rate
}

else
{
    taxAmount = (gross * .3); //Here the user will be taxed at a 20% rate
}

net = (gross - taxAmount);

//Variable that stores the information
const html = `<p>Hello ${name} based on:</p> 
<p>Hourly Rate: ${payRate}</p>
<p>Hours Worked: ${hoursWorked}</p>
<p>Here are your results:</p>
<p>Gross Pay: $${gross.toFixed(2)}</p> 
<p>Taxable Amount: $${taxAmount.toFixed(2)}</p> 
<p>Net Pay: $${net.toFixed(2)}</p>`;

//Alert pop up
alert(`Hello ${name} based on: 
Hourly Rate: ${payRate}
Hours Worked: ${hoursWorked}
Here are your results:
Gross Pay: $${gross.toFixed(2)} 
Taxable Amount: $${taxAmount.toFixed(2)} 
Net Pay: $${net.toFixed(2)}`);

//This is the documented section at the end of the page
document.write(html);