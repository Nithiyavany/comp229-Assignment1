// IIFE -- Immediately Invoked function Expression
(function(){
function start()
{
    console.log("App Started...");
}

window.addEventListener("load",  start);

})();

function inserPlaceholders()
if (!Assignment04.input.placeholder) {
    documnet.getElementById("firstnameinput").value = "first name";
    documnet.getElementById("lastinput").value = "last name";
    documnet.getElementById("addressinput").value = "address";
    documnet.getElementById("cityinput").value = "city";
    documnet.getElementById("postalinput").value = "a0a0a0";
	documnet.getElementById("proinput").value = "ON";
	documnet.getElementById("ageinput").value = "ageinput";
    documnet.getElementById("pwd1").value = "pwd1";
	documnet.getElementById("pwd2").value = "pwd2";
    documnet.getElementById("emailinput").value = "address@example.com";
}

function removeSelectedDefault() {
    var emptyBoxes = document.getElementsByTagName("select");
    for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
    }
}

if (Window.addEventListener) {
    window.addEventListener("load", inserPlaceholders, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", inserPlaceholders);
}


function validation()
{
	var password = document.getElementById('password').value;
	var cpassword = document.getElementById('cpassword').value;
	var email = document.getElementById('email').value;
	
    var passwordcheck = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
	var emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
	
 if (passwordcheck.test(password)){
	document.getElemrntById('passworderror').innerHTML ="";
}else{
	document.getElemrntById('passworderror').innerHTML ="** Password is Invalid";
  	return false;
}
    

 if (cpassword.match(password)){
	document.getElemrntById('cpassworderror').innerHTML ="";
}else{
	document.getElemrntById('cpassworderror').innerHTML ="** Password is not Matching";
  	return false;
}


 if (emailcheck.test(email)){
	document.getElemrntById('passworderror').innerHTML ="";
}else{
	document.getElemrntById('passworderror').innerHTML ="** Email is Invalid";
  	return false;
}
}



 function processInput() {
            var propertyWidth = 300;
            var propertyHeight = 100;
            var winleft = ((screen.width - propertyWidth) / 2);
            var winTop = ((screen.height - propertyHeight) / 2);
            var winOptions = "width=300,height=100";
            winOptions += ",left=" + winleft;
            winOptions += ",top=" + winTop;
            window.open("Registered.htm", "Registered", winOptions);
        }
		
 function createEventListener() {
             var registerbutton = document.getElementById("register");
             if (registerbutton.addEventListener) {
                 registerbutton.addEventListener("click", processInput, false);
            } else if (registerbutton.attachEvent) {
                 registerbutton.attachEvent("onclick", processInput);
             }
			
            }
			
			
 if (window.addEventListener) {
     window.addEventListener("load", createEventListener, false);
    } else if (window.attachEvent) {
     window.attachEvent("onload", createEventListener);
    }
	