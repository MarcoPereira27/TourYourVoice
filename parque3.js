	var ht;

window.onload = function(){

	document.getElementById("parque3_audio").play();
	
	ht = parseInt(getCookie("health"));
	
	incrementHealth(ht,0);
	drawHealth(ht);

	
	fodeteBugDoCSS("parque3");
	var pers = document.getElementById("personagem");
	
	
	initializeDetection();
	
	//not forget : por em %
	pers.style.top= convertPercentages(74.1,"top");
	pers.style.left= convertPercentages(17.3,"left");
	
	var nome_hud = getCookie("name");
	document.getElementById("nome_personagem").innerHTML = nome_hud;
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
			movement(tec.key, "parque3");
		break;
	}
}