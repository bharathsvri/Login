let loginSite=document.querySelector(".login");
let username=document.querySelector(".username");
let code=document.querySelector(".password");
let login=document.querySelector(".login-btn");
let start=document.querySelector(".get-start");
console.log(username);
console.log(code);
console.log(login);

function loginPage(){
	if(username.value=="" && code.value==""){
		alert("Enter your username and password");
	}
	else if(username.value==""){
		alert("Enter your username");
	}
	else if(code.value==""){
		alert("Enter your password");
	}
	else if(code.value=="bharath"){
		start.style.display="flex";
		loginSite.style.display="none";
	}
	else{
		alert("Connection wrong");
	}
}