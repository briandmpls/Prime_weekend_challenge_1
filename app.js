var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

var claim6 = {
	patientName: "Tony Oliva",
	visitType: "Specialist",
	visitCost: 2300
}

var claim7 = {
	patientName: "Rod Carew",
	visitType: "Emergency",
	visitCost: 15000
}
var claim8 = {
	patientName: "Willie Mays",
	visitType: "Specialist",
	visitCost: 1289
}
var claim9 = {
	patientName: "Hank Aaron",
	visitType: "Optical",
	visitCost: 900
}
var claim10 = {
	patientName: "Dave Winfield",
	visitType: "Primary Care",
	visitCost: 325
}


var initialList = [claim1, claim2, claim3, claim4, claim5, claim6, claim7, claim8, claim9, claim10]

var totalPayedOut = 0;

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//function to determine percent covered
// Switch function to sort visit type and return coverage percentage


function percentCovered(array){

var type = array.visitType;

	switch(type){
		case("Optical"):
		return 0;
		break;

		case("Specialist"):
		return .10;
		break;


		case("Emergency"):
		return 1;
		break;


		case("Primary Care"):
		return .50;
		break;
	}

}
// Create variables used to write to the DOM
 var newEl, newText, position;

// Capture the position of insertion into the DOM
 position = document.getElementById('content');


// function to loop through array of objects and determine amount covered for each patient
// amount covered = percent covered * visit cost

for(var i= 0 ;  i < initialList.length; i++){
  var amountCovered = percentCovered(initialList[i]) * initialList[i].visitCost;
  amountCovered = Math.round(amountCovered);


  var coverageMessage = "Paid out $" + amountCovered +" for " + initialList[i].patientName + ".";

  totalPayedOut += amountCovered; 


// Print amounts covered to DOM  and console 
  	newEl = document.createElement('li');
	newText = document.createTextNode(coverageMessage);
	newEl.appendChild(newText);
	position.appendChild(newEl);

  console.log(coverageMessage);
}



// Print total amount paid out to DOM and console

	var totalPaidOutMessage = "Total amount paid out $" + totalPayedOut + "."

  	newEl = document.createElement('p');
	newText = document.createTextNode(totalPaidOutMessage);
	newEl.appendChild(newText);
	position.appendChild(newEl);

	console.log(totalPaidOutMessage);




























