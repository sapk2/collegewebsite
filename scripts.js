function validate(){
   var email = document.getElementById(email).value;
   var pass = document.getElementById(pass).value;

   if(email=='' || pass==''){
    alert ('Both Fields are required.');
    return false;
   }
}

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}