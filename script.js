let executeButton = document.getElementById("executeButton");
let outputParagraph = document.getElementById("outputText");
let inputElement = document.getElementById("myInput");

let home = ["mansion","apartment","shed","house"];
let marriage = ["Meghan Thee Stallion", "Tom Holland", "Kristen Stewart", "Danny Devito", "Trixie Mattel", "Katya", "Dev Patel", "Hrithik Roshan", "Shah Rukh Khan", "Michelle Yeoh"]
let job = ["UX designer", "doctor", "professional gamer", "streamer", "podcaster", "personal assistant", "installation artist", "M&M product tester", "cow poop picker upper", "photographer"]


executeButton.addEventListener("click", function(){
	let currentInputText = inputElement.value;
	generate(currentInputText);
	restyle();
});

function generate(incUserInput){
	let homeIndex = Math.floor(Math.random() * home.length);
	let marriageIndex = Math.floor(Math.random() * marriage.length);
	let jobIndex = Math.floor(Math.random() * job.length);
	let selectedHome = home[homeIndex];
	let selectedKids = Math.floor(Math.random() * 10);
	let selectedJob = job[jobIndex];
	let selectedMarriage = marriage[marriageIndex];
	outputParagraph.innerText = incUserInput + " will be a " + selectedJob + ", marry " + selectedMarriage + " and have " + selectedKids + " kids. They will live in a " + selectedHome + " together."
} 

function restyle(){
	let colorArray = ["red", "blue", "darkgreen", "blue", "purple", "black"];
	let fontArray = ["Verdana", "Tahoma", "Trebuchet MS", "Times New Roman", "Georgia", "Garamond"];
	let randomFont = fontArray[Math.floor(Math.random() * fontArray.length)];
	let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
	let randomFontSize = Math.floor(Math.random() * 40)+14;
	outputParagraph.style.color = randomColor;
	outputParagraph.style.fontSize = randomFontSize + "px";
	outputParagraph.style.fontFamily = randomFont;
}