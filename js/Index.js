// create the body eement first
let body = document.body;
//  creat the fooster element next
var footer = document.createElement("footer")
// append the fooster to the boy
body.appendChild(footer);
// create a new Date object
const today = new Date();
// Get current year
const thisYear = today.getFullYear();
// Get current footeer element
footer = document.querySelector("footer");
// Create a new <p> element
const copyright = document.createElement("p");
// set inner html with copyright symbol for your name and year
// <p> coppyright Pedram Lalezar 2025
copyright.innerHTML = `\u00A9 Pedram Lalezar ${thisYear}`;
// append <p> tot he footer
footer.appendChild(copyright);
// center the footer
footer.style.textAlign = "Center";

// skills
// List your technical skills
const skills = ["JavaScript", "HTML", "CSS"];
// Select the Skills section by id
const skillsSection = document.getElementById("Skills");
// Select the Empty <ul> inside the skills section
const skillsList = skillsSection.querySelector("ul");
// loop through the Skills array
for (let i =0; i<skills.lenght; i++) {
    //create a new <li> element
    const skills = document.createElement("li");
    // set the text of each li to the current skill
    skills.innerText = skills(li);
    //append the <li> to the skills list
    skillsList.appendChild(skill);
}
// skills.forEach(skill =>{ 
    // create a new <li> element
    // const skills = document.createElement("li");
    // set the text of each li to the current skill
    // skills.innerText = skills(li);
    // append the <li> to the skills list
    // skillsList.appendChild(skill);})