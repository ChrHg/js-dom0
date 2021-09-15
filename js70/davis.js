"use strict";
/*
 * davis.js
 */
const $ = function (foo) {
	return document.getElementById(foo); // save keystrokes
}

let empty = function (target) {
	let foo = target;
	// Removing all children from an element
	while (foo.firstChild) {
		foo.removeChild(foo.firstChild);
	}
}

let fillColumn = function (target) {
	let art = target;

	let img = document.createElement("img"); // create element
	img.setAttribute("src", "book-icon.png");
	img.setAttribute("alt", "book icon");
	img.setAttribute("width", "64");

	let h1 = document.createElement("h1"); // create element
	let txt = document.createTextNode("Always"); // create text
	h1.appendChild(txt); // put on tree

	let par = document.createElement("p"); // create element
	txt = document.createTextNode("You could have four columns here but you won't. You'll have three like everyone else."); // create text
	document.getElementById("center").style.color = "yellow"; //turns the text in the middle column yellow
	par.appendChild(txt); // put onto tree

	art.appendChild(img);
	art.appendChild(h1);
	art.appendChild(par);
}

let t1 = function (ev) {
	let target = ev.target;
	let id = target.id;
	console.log(target);
	let elm = $(id);
	if (target.innerHTML !== "") {
	empty(elm);
	} else {
		switch (id) {
			case "left": fillColumn(elm); break;
			case "center": fillColumn(elm); break;
			case "right": fillColumn(elm); break;
		}
	}
}

let initialize = function () {
	let left = $("left");
	let center =$ ("center");
	let right =$ ("right");
	fillColumn(left);
	fillColumn(center);
	fillColumn(right);
	left.addEventListener("click", t1);
	center.addEventListener("click", t1);
	right.addEventListener("click", t1);
}

window.addEventListener("load", initialize);