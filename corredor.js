var ht;
var crossPoint = parseInt(convertPercentages(60,"left"));

window.onload = function(){

	document.getElementById("corredor_audio").play();
	
	ht = parseInt(getCookie("health"));
	
	incrementHealth(ht,0);
	drawHealth(ht);

	
	fodeteBugDoCSS("corredor");
	var pers = document.getElementById("personagem");
	
	
	initializeDetection();
	
	//not forget : por em %
	pers.style.top= convertPercentages(47.7,"top");
	pers.style.left= convertPercentages(82,"left");	
	
	document.getElementById("opcao_1_corredor").onclick = function(){ ht = incrementHealth(ht,10);
		drawHealth(ht);   document.getElementById("dialogo_opcao_corredor").style.visibility="hidden"; smokeDialog12(); };
	document.getElementById("opcao_2_corredor").onclick = function(){ ht = incrementHealth(ht,5);
		drawHealth(ht);   document.getElementById("dialogo_opcao_corredor").style.visibility="hidden"; smokeDialog12(); };
	document.getElementById("opcao_3_corredor").onclick = function(){ ht = incrementHealth(ht,-5);
		drawHealth(ht);   document.getElementById("dialogo_opcao_corredor").style.visibility="hidden"; smokeDialog12(); };
	document.getElementById("opcao_4_corredor").onclick = function(){ ht = incrementHealth(ht,-10);
		drawHealth(ht);   document.getElementById("dialogo_opcao_corredor").style.visibility="hidden"; smokeDialog12(); };
	
	var nome_hud = getCookie("name");
	document.getElementById("nome_personagem").innerHTML = nome_hud;
}


function verificarSePodeInteragir_corredor(){

	pX=parseInt(pers.style.left);
	//pY2 = pY;
	
	if(pX <= crossPoint){
		if(getCookie("hasSmoked")=="false")
		{
			changeMoveAbility(false);
			setTimeout(startDialog_smokes,1000);
		}
	}

}


function startDialog_smokes(){
	document.cookie="hasSmoked=true";
	document.getElementById("dialogo1_corredor").style.visibility="visible";
	setTimeout(smokeDialog2,2500);
}

function smokeDialog2(){
	document.getElementById("dialogo1_corredor").style.visibility="hidden";
	setTimeout(smokeDialog3,500);
}

function smokeDialog3(){
	document.getElementById("dialogo2_corredor").style.visibility="visible";
	setTimeout(smokeDialog4,2500);
}

function smokeDialog4(){
	document.getElementById("dialogo2_corredor").style.visibility="hidden";
	setTimeout(smokeDialog5,500);
}

function smokeDialog5(){
	document.getElementById("dialogo3_corredor").style.visibility="visible";
	setTimeout(smokeDialog6,2500);
}

function smokeDialog6(){
	document.getElementById("dialogo3_corredor").style.visibility="hidden";
	setTimeout(smokeDialog7,500);
}

function smokeDialog7(){
	document.getElementById("dialogo4_corredor").style.visibility="visible";
	setTimeout(smokeDialog8,2500);
}

function smokeDialog8(){
	document.getElementById("dialogo4_corredor").style.visibility="hidden";
	setTimeout(smokeDialog9,500);
}

function smokeDialog9(){
	document.getElementById("dialogo5_corredor").style.visibility="visible";
	setTimeout(smokeDialog10,2500);
}

function smokeDialog10(){
	document.getElementById("dialogo5_corredor").style.visibility="hidden";
	setTimeout(smokeDialog11,500);
}

function smokeDialog11(){
	document.getElementById("dialogo_opcao_corredor").style.visibility="visible";
}

function smokeDialog12(){
	document.getElementById("dialogo6_corredor").style.visibility="visible";
	setTimeout(smokeDialog13,2500);
}

function smokeDialog13(){
	document.getElementById("dialogo6_corredor").style.visibility="hidden";
	
	changeMoveAbility(true);
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
			movement(tec.key, "corredor");
			verificarSePodeInteragir_corredor();
		break;
	}
}