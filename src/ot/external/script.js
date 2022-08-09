//Declaring Memory Variables//
var a = 0;	var l = 0;
var b = 0;	var m = 0;
var c = 0;	var n = 0;
var d = 0;	var o = 0;
var e = 0;	var p = 0;
var f = 0;	var q = 0;
var g = 0;	var r = 0;
var h = 0;	var s = 0;
var i = 0;	var t = 0;
var j = 0;	var u = 0;
var k = 0;	var v = 0;



/*Getting Elements*/
var drop = document.getElementById('drop');
var enter = document.getElementById('enter');
var mobile_menu_nav = document.getElementById('mobile_menu_nav');
var header = document.getElementById('header');
var getstartedkey = document.getElementById('getstartedkey');
var getstarted1 = document.getElementById('getstarted1');
var productskey = document.getElementById('productskey');
var products1 = document.getElementById('products1');
var prices_key = document.getElementById('prices_key');
var prices1 = document.getElementById('prices1');
var aboutkey = document.getElementById('aboutkey');
var about1 = document.getElementById('about1');
var contactkey = document.getElementById('contactkey');
var contact1 = document.getElementById('contact1');
var main_login = document.getElementById('main_login');
var mobile_login_nav = document.getElementById('mobile_login_nav');
var getstartedkey1 = document.getElementById('getstartedkey1');
var productskey1 = document.getElementById('productskey1');
var prices_key1 = document.getElementById('prices_key1');
var aboutkey1 = document.getElementById('aboutkey1');
var contactkey1 = document.getElementById('contactkey1');


/*Code For Dropdown Menu*/
drop.addEventListener('click',function(){
	a++;
	if (a%2 == 1){
		drop.style.display ="none";
		enter.style.display ="flex";
		mobile_menu_nav.style.height ="270px";}

	else{b = 0;
		c = 0;
		d = 0;
		e = 0;
		f = 0;
		h = 0;
		drop.style.display ="flex";
		enter.style.display ="none";
		mobile_menu_nav.style.height ="0px";
		getstarted1.style.height ="0px";
		products1.style.height ="0px";
		prices1.style.height ="0px";
		about1.style.height ="0px";
		getstartedkey.style.backgroundColor ="#EFEFEF";
		getstartedkey1.style.color ="";
		productskey.style.backgroundColor ="#EFEFEF";
		productskey1.style.color ="";
		prices_key.style.backgroundColor ="#EFEFEF";
		prices_key1.style.color ="#581C20";
		aboutkey.style.backgroundColor ="#EFEFEF";
		aboutkey1.style.color ="";
		contactkey.style.backgroundColor ="#EFEFEF";
		contactkey1.style.color ="";
		contact_us1.style.height ="0px";}
})


enter.addEventListener('click',function(){
	a++;
	if (a%2 == 0){
		b = 0;
		c = 0;
		d = 0;
		e = 0;
		f = 0;
		h = 0;
		drop.style.display ="flex";
		enter.style.display ="none";
		mobile_menu_nav.style.height ="0px";
		getstarted1.style.height ="0px";
		products1.style.height ="0px";
		prices1.style.height ="0px";
		about1.style.height ="0px";
		getstartedkey.style.backgroundColor ="#EFEFEF";
		getstartedkey1.style.color ="";
		productskey.style.backgroundColor ="#EFEFEF";
		productskey1.style.color ="";
		prices_key.style.backgroundColor ="#EFEFEF";
		prices_key1.style.color ="";
		aboutkey.style.backgroundColor ="#EFEFEF";
		aboutkey1.style.color ="";
		contactkey.style.backgroundColor ="#EFEFEF";
		contactkey1.style.color ="";
		contact_us1.style.height ="0px";}

	else{enter.style.display ="flex";
		drop.style.display ="none";
		mobile_menu_nav.style.height ="270px";}
})


//Code For Screen-Size DropDown

window.addEventListener('resize',function resizeme(){
	if (window.innerWidth <= 1100 && a%2 == 1){
		drop.style.display ="none";
		enter.style.display ="flex";
		mobile_menu_nav.style.height ="270px";

	}
	else if (window.innerWidth <= 1100 && a%2 == 0){
		drop.style.display ="flex";
		enter.style.display = "none";
		mobile_menu_nav.style.height ="0px";
	
		
	}

	else{drop.style.display ="none";
		enter.style.display ="none";
		mobile_menu_nav.style.height ="0px";
	
	}
})


//Code For Each Inner DropDown

getstartedkey.addEventListener('click',function(){
	b++;
	if (b%2 == 1){
		getstarted1.style.height ="135px";
		getstartedkey.style.backgroundColor ="#252525";
		getstartedkey1.style.color ="white";
		mobile_menu_nav.style.height ="auto";}

	else{getstarted1.style.height ="0px";
		getstartedkey.style.backgroundColor ="#EFEFEF";
		getstartedkey1.style.color ="";}
})


window.addEventListener('resize',function resizeme(){
	if (window.innerWidth <= 1100 && b%2 == 1){
		getstarted1.style.height ="135px";
		mobile_menu_nav.style.height ="auto";
		getstartedkey.style.backgroundColor ="#252525";
		getstartedkey1.style.color ="white";


		
	}

	else{getstarted1.style.height ="0px";
		getstartedkey.style.backgroundColor ="#EFEFEF";
		getstartedkey1.style.color =""
	
	}
})




productskey.addEventListener('click',function(){
	c++;
	if (c%2 == 1){
		products1.style.height ="105px";
		mobile_menu_nav.style.height ="auto";
		productskey.style.backgroundColor ="#252525";
		productskey1.style.color ="white";}

	else{products1.style.height ="0px";
		productskey.style.backgroundColor ="#EFEFEF";
		productskey1.style.color ="";}
})


window.addEventListener('resize',function resizeme(){
	if (window.innerWidth <= 1100 && c%2 == 1){
		products1.style.height ="135px";
		mobile_menu_nav.style.height ="auto";
		productskey.style.backgroundColor ="#252525";
		productskey1.style.color ="white";

		
	}

	else{products1.style.height ="0px";
		productskey.style.backgroundColor ="#EFEFEF";
		productskey1.style.color ="";
	
	}
})




prices_key.addEventListener('click',function(){
	d++;
	if (d%2 == 1){
		prices1.style.height ="630px";
		mobile_menu_nav.style.height ="auto";
		prices_key.style.backgroundColor ="#252525";
		prices_key1.style.color ="white";}

	else{prices1.style.height ="0px";
		prices_key.style.backgroundColor ="#EFEFEF";
		prices_key1.style.color ="";}
})


window.addEventListener('resize',function resizeme(){
	if (window.innerWidth <= 1100 && d%2 == 1){
		prices1.style.height ="630px";
		mobile_menu_nav.style.height ="auto";
		prices_key.style.backgroundColor ="#252525";
		prices_key1.style.color ="white";

		
	}

	else{prices1.style.height ="0px";
		prices_key.style.backgroundColor ="#EFEFEF";
		prices_key1.style.color ="";
	
	}
})




aboutkey.addEventListener('click',function(){
	e++;
	if (e%2 == 1){
		about1.style.height ="100px";
		mobile_menu_nav.style.height ="auto";
		aboutkey.style.backgroundColor ="#252525";
		aboutkey1.style.color ="white";
	}

	else{about1.style.height ="0px";
		aboutkey.style.backgroundColor ="#EFEFEF";
		aboutkey1.style.color ="";}
})


window.addEventListener('resize',function resizeme(){
	if (window.innerWidth <= 1100 && e%2 == 1){
		about1.style.height ="130px";
		mobile_menu_nav.style.height ="auto";
		aboutkey.style.backgroundColor ="#252525";
		aboutkey1.style.color ="white";

		
	}

	else{about1.style.height ="0px";
		aboutkey.style.backgroundColor ="#EFEFEF";
		aboutkey1.style.color ="";
	
	}
})





contactkey.addEventListener('click',function(){
	f++;
	if (f%2 == 1){
		contact1.style.height ="225px";
		mobile_menu_nav.style.height ="auto";
		contactkey.style.backgroundColor ="#252525";
		contactkey1.style.color ="white";}

	else{contact1.style.height ="0px";
	contactkey.style.backgroundColor ="#EFEFEF";
	contactkey1.style.color ="";}
})


window.addEventListener('resize',function resizeme(){
	if (window.innerWidth <= 1100 && f%2 == 1){
		contact1.style.height ="225px";
		mobile_menu_nav.style.height ="auto";
		contactkey.style.backgroundColor ="#252525";
		contactkey1.style.color ="white";

		
	}

	else{contact_us1.style.height ="0px";
		contactkey.style.backgroundColor ="#EFEFEF";
		contactkey1.style.color ="";
	
	}
})




/*Code For Login DropDown*/

main_login.addEventListener('click',function(){
	g++;
	if(g%2 == 1){
	mobile_login_nav.style.display ="block";
	}
	else{mobile_login_nav.style.display ="none";}
})




window.addEventListener('resize',function resizeme(){
	if (window.innerWidth <= 1100 && g%2 == 1){
		mobile_login_nav.style.display ="block";	
	}

	else{mobile_login_nav.style.display ="none";
	
	}
})
