function onDOMLoad() { 
    var message = "DOM load success";
    var paragraph = document.createElement("p");
    paragraph.textContent = message;
    document.body.appendChild(paragraph);
  }

  document.addEventListener("DOMContentLoaded", onDOMLoad);