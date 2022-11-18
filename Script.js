
function add(){
   // alert("blabla");
   var element = document.createElement("input");
   element.maxlength = 1
   element.size = "1"
   element.type = "text"
  // add("text");
    var foo = document.getElementById("add1");
    //Append the element in page (in span).
    foo.appendChild(element);
  console.log("sd")
};

document.getElementById("addAlpha").onclick = function() {
  add();
};
