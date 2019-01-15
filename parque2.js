var ht;

window.onload = function(){

	document.getElementById("parque2_audio").play();
	
	ht = parseInt(getCookie("health"));
	
	incrementHealth(ht,0);
	drawHealth(ht);

	
	fodeteBugDoCSS("parque2");
	var pers = document.getElementById("personagem");
	
	if(getCookie("hasSeenDialogRestaurant")=="true"){ 
		setTimeout(startStreetDialog,1000);
	}
	
	initializeDetection();
	
	//not forget : por em %
	pers.style.top= convertPercentages(74.1,"top");
	pers.style.left= convertPercentages(17.3,"left");
	
	var nome_hud = getCookie("name");
	document.getElementById("nome_personagem").innerHTML = nome_hud;
}

function startStreetDialog(){
	document.getElementById("dialogo1_parque2").style.visibility="visible";
	setTimeout(continueStreetDialog,2500);
}

function continueStreetDialog(){
	document.getElementById("dialogo1_parque2").style.visibility="hidden";
	setTimeout(continueStreetDialog2,500);
}

function continueStreetDialog2(){
	document.getElementById("dialogo2_parque2").style.visibility="visible";
	setTimeout(continueStreetDialog3,2500);
}

function continueStreetDialog3(){
	document.getElementById("dialogo2_parque2").style.visibility="hidden";
}

window.onkeypress = function (tec){
	switch(tec.key){
		case "i":
		if(document.getElementById("hud_hud").style.visibility=="visible" || document.getElementById("hud_hud").style.visibility==""){
			document.getElementById("hud_hud").style.visibility="hidden";
		}else{
			document.getElementById("hud_hud").style.visibility="visible";
		}
		break;
	
		default:
			movement(tec.key, "parque2");
		break;
	}
}