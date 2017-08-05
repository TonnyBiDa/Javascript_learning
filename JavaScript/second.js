import {Tony, Mitch, Anna,items,inputs} from './main.js';




Tony.addEventListener("click", piclink);
Mitch.addEventListener("click", piclink);
Anna.addEventListener("click", piclink);

function piclink(){
	var allimages = document.querySelectorAll("img");
	for (var i = 0; i < allimages.length; i++){
		allimages[i].style.display = "";
	}
	
	var picid = this.attributes["data-img"].value;
	// console.log(picid);
	var pic = document.getElementById(picid);
	// console.log(pic);
	// console.log(pic.style.display);
	if (pic.style.display ==""){
		pic.style.display = "block";
	}
	else{
		pic.style.display = "";
	}
}

for (var i = 0; i < items.length; i++) {
	items[i].addEventListener("click", editItem);
	inputs[i].addEventListener("blur", updateItem);
	inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem(){ 
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
	input.setSelectionRange(0, input.value.length);
	// a++;
	// if (a>=2){
	// 	hideen();
	var span = this.querySelector("span");
	// console.log(span.style.visibility);
	// if (span.style.visibility === "visible"){
	// 	span.style.visibility = "hideen";
	// }
	// else{
	// 	span.style.visibility = "visible";
	// 	console.log(span.style.visibility);
	// }
	
}
// function hideen(){
// 	console.log(items[0]);
// 	var span = items[0].querySelector("span");

// 	span.style.visibility = "hidden";
// 	console.log("h1231");
// }

function updateItem() {
	// console.log(this);
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = "";
}

function itemKeypress(event){
	// console.log(event.which);
	if (event.which === 13){
		updateItem.call(this);
	}
}