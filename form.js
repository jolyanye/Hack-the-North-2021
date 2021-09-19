//form
  function result() {
  
  
  var a = document.getElementById("one").checked
  var b = document.getElementById("two").checked
  

  if (b == true) {
    alert("Thank you for filling out the form! We do not think you'll enjoy the RPG.");
    location.assign("index.html");
  } 
  else {
    alert("Thank you for filling out the form! We think you'll enjoy the RPG.");
    location.assign("index.html");
  }
  }
  
