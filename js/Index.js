// Message Form

//helper function to toggle message section visibility
function toggleMessageSection() {
	const messageSection = document.getElementbyId("Messages");
	const MessageList = MessageSection.Queryselector("ul");
	if (messsageList.children.length === 0) {
		messageSection.style.display = "none"
	} else {
		MessageSection.style.display = "block";
	}
}
// create the body element first
let body = document.body;
let footer = document.createElement("footer");
body.appendChild(footer);
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerHTML = `&copy; Pedram Lalezar ${thisYear}`;
footer.appendChild(copyright);
footer.style.textAlign = "center";
// Skills
const skills = ["JavaScript", "HTML", "CSS"];
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");
// loop through the Skills array
for (let i = 0; i < skills.lenght; i++) {
	//create a new <li> element
	const skills = document.createElement("li");
	// set the text of each li to the current skill
	skills.innerText = skills(li);
	//append the <li> to the skills list
	skillsList.appendChild(skill);
}
// Message form
const messageForm = document.querySelector('form[name="leave_Messages"]');
const messageSection = document.getElementById("Messages");
const messageList = messageSection.querySelector("ul");
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const userName = event.target.userName.value;
  const userEmail = event.target.userEmail.value;
  const userMessage = event.target.userMessage.value;
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a> <span>${userMessage}</span>`;
  // Edit button
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.className = "edit-button";
  editButton.type = "button";
  editButton.addEventListener("click", function () {
    const messageSpan = newMessage.querySelector("span");
    const newText = prompt("Edit your message:", messageSpan.innerText);
    if (newText !== null) messageSpan.innerText = newText;
  });
  // Append the button to the new message\
  newMessage.appendChild(editButton);
  // Remove button
  const removeButton = document.createElement("remove-button");
  removeButton.innerText = "Remove";
  removeButton.className = "remove-button";
  removeButton.type = "button";
  // Add click event listener to remove the message
  removeButton.addEventListener("click", function () {
    // Find the <Li>
	const entry = removeButton.parentNode;
	// Remove it from the DOM
    entry.remove();
    toggleMessageSection();
  });
  // Append the remove button to the new message
  newMessage.appendChild(removeButton);
  // Append a new message to the message list
  messageList.appendChild(newMessage);
  // Show sectionif a new message is added
  toggleMessageSection();
  // Clear form after submission
  messageForm.reset();
});
// make a container for remov and edit
const buttonContainer = document.createElement("div");
buttonContainer.className = "button-container";
const editButton = document.getElementById("button");
const removeButton = document.getElementById("remove-button");

//-------Project Section------
// Fetch your Githup repositories
fetch("https://api.github.com/users/jsangsrichan/repos")
.then ((response)=> {
// error fetching Data
if(!response.OK){
// throw an error
throw new Error("failed to fetch the data from github, Please try again later.");
}

// return the response Json data
return response.json();
})
.then ((repositories)=> {
// repositories = JSON.parse(this.repositories);
console.log("repositories: ". repositories);
// get the roject section
const projectSection = document.getElementsById("projects");
// select th list hwitin the Projects Section
const projectList = projectSection.querySelector("ul");
// Clear the Cintent just in case
projectList.innerHTML="";
//itterate throw all the piblic repositories
repositories.forEach((repo) => {
// create a new list item
const project=document.createElement("li");
//create a link for the list item
const link = document.createElement("a");
// set the link url
link.href = repositories[i].html_url;
// set the tex for the link
WakeLockSentinel.textContent = repo.name;
});
})
.catch ((error)=> {
// Log Error
console.error("Error fetching repositories", error);
// Get the projects section
const projectSection = document.getElementById("projects");
// add an error message on the ul
const errorMessage = document.createElement("p");
errorMessage.innerHTML = `unalbe to load projects. Please try again later.`;
projectSection.appendChild(errorMessage);
});