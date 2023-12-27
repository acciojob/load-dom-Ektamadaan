

  document.addEventListener("DOMContentLoaded", function () { 
    var paragraph = document.createElement("p");
	  var textNode = document.createTextNode("DOM load success");
    paragraph.appendChild(textNode);
    document.body.appendChild(paragraph);
  });