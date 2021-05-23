 function theme() {
     switch (document.getElementById("dropdown").value) {
         case "subject":
             document.getElementById("body").style.backgroundImage = "url(/assets/images/кружочек.jpeg)";
             break;
         case "paws":
             document.getElementById("body").style.backgroundImage = "url(/assets/images/лапки.jpeg)";
             break;
         case "muzzles":
             document.getElementById("body").style.backgroundImage = "url(/assets/images/Мордочки.jpeg)";
             break;
         case "rainbow":
             document.getElementById("body").style.backgroundImage = "url(/assets/images/Радужный.jpeg)";
             break;
         case "circle":
             document.getElementById("body").style.backgroundImage = "url(/assets/images/кружочек.jpeg)";
             break;
         case "rats":
             document.getElementById("body").style.backgroundImage = "url(/assets/images/мышь.jpg)";
             break;
         case "hunter":
             document.getElementById("body").style.backgroundImage = "url(/assets/images/охотник.jpeg)";
             break;
     }
 }