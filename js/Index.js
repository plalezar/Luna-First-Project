	// Message Form
	
	//helper function to toggle message section visibility
	function toggleMessageSection(){
	 const messageSection =document.getElementbyId("Messages");
	 const MessageList= MessageSection.Queryselector("ul");
	if (messsageList.children.length === 0){
	messageSection.style.display= "none"
	} else {
	MessageSection.style.display = "block";
	}
	}
 // create the body element first
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
// Select the leave message for by name
	const messageForm = document.quarySelector (form[name="leave_Messages"]);
	
	// add an event listener to handle "submit"
	messsageFrom.addEventListener ("submit", function(event) {
	// prevent page refresh
	event.preventdefault();
    
	// retrieve form fiel values
	const userName = event.target.username.value;
	const userEmail = event.target.userEmail.value; 
	const userMessage = evetn.target.usersMessage.value;
    });
    // Log the value
	console.log ("name; ", userName);
	console.log ("email: ", userEmail);
	console.log ("Message: ", userMessage);
    
	// Select the Messeges section
	const messageSection = document.getElementById(Messages);
	
	// select the <ul> inside the messages section
	const messageList = messageSection.queryselector("ul");
	
	// Create a new list item 
	const newMessage = document.createElement("li");
	
	// set the inner HTML"
	newMessage.innerHTML = <a href="mailto$(userEmail)">$(username)</a>; <span>$(userMEssage)</span>
	editbutton.innerText = "edit";
	editbutton.className = "edit-button";
	editbutton.type = "button";
	// update the message
	if (newText !==null) { messageSpan.inneText = newText
	
	// add click Listener to edit the message 
	editButton.addEventListener("Click", function() {
	const messageSpan = newMessage.queryselector("span");
	//prompt the user for new message 
    const newtext = Prompt("Edit your message; ", messageSpan.innerText);
	});
	
	//append the edit button to the new message 
	newMessage.appendChild(editbutton);B
	
	//create an edit button = document.createElement("button")
	
	// create a remove button
	
	const removeButton = document.creatElement("button");
	removeButton.innerText = "remove";
	removeButton.className = "remove-bin";
	removeButton.type = "button";
	
	// Add Clcik event listener to remove the message
	removeButton.addEventListener ("click", function() {
	// find the <li>
	const entry = removeButton.parentNode;
	// remove it 
	entry.remove();
	});
	// Append the remove button to the new message
	newMessage.appendChild(removebutton);
	
	// Append the new message tot he message list
	messagelist.appendChild(newMessage);
	
		// initiall hide the messages section (we start out with 0 messages) toggle if exists a new message
	toggleMessageSection();
	
	
	//clear the form after submission
	messageForm.reset();
	};