
function purple() {
	var listItems = document.getElementsByClassName("list-item");
	for (var i = 0; i < listItems.length; i++) {
    listItems[i].classList.add("purple");
	}
}


function black() {
	var listItems = document.getElementsByClassName("list-item");
	for (var i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove("purple");
	}
}



function orange() {
	var listItems = document.getElementsByClassName("list-item");
	for (var i = 0; i < listItems.length; i++) {
    listItems[i].classList.add("orange");	
	}
}




function notOrange() {
	var listItems = document.getElementsByClassName("list-item");
	for (var i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove("orange");
	}
}



function hidePara1(){
	var para = document.getElementById("para1");
	para.classList.add("hide");
}


function showPara1(){
	var para = document.getElementById("para1");
	para.classList.remove("hide");
}



var colorCount = 0;

function changeBackground(){
	var para = document.getElementById("para2");
	if (colorCount === 0) {
		para.classList.add("blueBackground");
		colorCount ++;
	} else if(colorCount === 1) {
		para.classList.remove("blueBackground");
		para.classList.add("orangeBackground");
		colorCount ++;
	} else if(colorCount === 2) {
		para.classList.remove("orangeBackground");
		colorCount === 0;
	}

}


function eon(){
	var listItems = document.getElementsByClassName("week");
	for (var i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML = "Eon 7, Day 2 Practice";
	}
}

function notEon(){
	var listItems = document.getElementsByClassName("week");
	for (var i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML = "Week 7, Day 2 Practice";
	}
}


function rightJustifyPara4() {
	var para = document.getElementById("para4");
	para.classList.add("rightJustify");

}

function shoutKitty(el) {
	var shout = el.innerHTML.toUpperCase();
	el.innerHTML=(shout);
	var image = document.getElementById("kittyPic");
	image.classList.remove("hide");
	image.classList.add("showKitty");
}


function noShoutKitty(el) {
	el.classList.remove("showKitty");
	el.classList.add("hide");
	var link = document.getElementById("kittyPic");
	link.innerHTML=("this link");
}

function promptNewText(el) {
	var answer = prompt("What should this paragraph say?");
	el.innerHTML= answer;
}
