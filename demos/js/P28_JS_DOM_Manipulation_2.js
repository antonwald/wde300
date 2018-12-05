var header = document.querySelector("h1");
header.firstChild.data = "Another dynamic document";

var para1 = document.querySelector("p");
para1.firstChild.data = "This is the first paragraph.";

var para2 = document.querySelector("#para2");
para2.firstChild.data = "This is the second paragraph.";

var infoParagraphs = document.querySelectorAll(".info");
for (para = 0; para < infoParagraphs.length; para++) {
	infoParagraphs[para].firstChild.data = "This is an information paragraph.";
}

var title3 = document.querySelector("h3.klass");
title3.firstChild.data = "Dynamic";