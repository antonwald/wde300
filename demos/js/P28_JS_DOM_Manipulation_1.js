// document.getElementsByTagName("H1") returns a NodeList of the H1
// elements in the document, and the first is number 0:
var header = document.getElementsByTagName("H1").item(0);

// the firstChild of the header is a Text node, and the data
// property of the text node contains its text:
header.firstChild.data = "A dynamic document";
// now the header is "A dynamic document".

// Get the first P element in the document the same way:
var para1 = document.getElementsByTagName("P").item(0);
// and change its text too:
para1.firstChild.data = "This is the first paragraph.";

// Get the second P element in the document by using the Id:
var para2 = document.getElementById("para2");
// and change its text as well:
para2.firstChild.data = "This is the second paragraph.";

// create a new Text node for the third paragraph
var newText = document.createTextNode("This is the third paragraph.");
// create a new Element to be the third paragraph
var newElement = document.createElement("P");
// put the text in the paragraph
newElement.appendChild(newText);
// and put the paragraph on the end of the document by appending it to
// the BODY (which is the parent of para)
para1.parentNode.appendChild(newElement);