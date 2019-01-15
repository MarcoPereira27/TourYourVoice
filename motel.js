var ht;
var moveVirgilex=true;
var virgilioStop = parseInt(convertPercentages(49.7,"left"));
var virgilioNewStop = parseInt(convertPercentages(10,"top"));
var crossPoint = parseInt(convertPercentages(41.12,"top"));
var X;
var o=false;
var canVrigilioStop=false;

window.onload = function(){

	
	document.getElementById("motel_musica_audio").play();
	document.getElementById("motel_porta_audio").play();

	
	ht = parseInt(getCookie("health"));
	
	incrementHealth(ht,0);
	drawHealth(ht);
	
	

	
	fodeteBugDoCSS("motel");
	var pers = document.getElementById("personagem");
	var virgilio = document.getElementById("virgilio");
	
	if(getCookie("hasSeenDialogMotel")=="true"){virgilio.style.visibility = "hidden";}
	
	
	
	initializeDetection();
	
	//not forget : por em %
	pers.style.top= convertPercentages(70.1,"top");
	pers.style.left= convertPercentages(45.7,"left");
	
	
	document.getElementById("opcao_1_motel").onclick = function(){ 
		ht = incrementHealth(ht,10);
		drawHealth(ht);
		document.getElementById("dialogo_opcao_motel").style.visibility="hidden";
		motelDialog4();
	};
	document.getElementById("opcao_2_motel").onclick = function(){ 
		ht = incrementHealth(ht,-10);
		drawHealth(ht);
		document.getElementById("dialogo_opcao_motel").style.visibility="hidden";
		motelDialog4();
	};
	var nome_hud = getCookie("name");
	document.getElementById("nome_personagem").innerHTML = nome_hud;
}

function verificarSePodeInteragir_motel(){

	pY=parseInt(pers.style.top)+(0.894*parseInt(pers.style.height));
	//pY2 = pY;
	
	if(pY < crossPoint){
		if(getCookie("hasSeenDialogMotel")=="false"){
			changeMoveAbility(false);
			startAnim_motel();
		}else{}
	}

}

function motelDialog4(){
	document.getElementById("dialogo2_motel").style.visibility="visible";
	setTimeout(motelDialog5,2500);
}

function desaparecerVirgilio(){
	if(canVrigilioStop==false){
	var vX = parseInt(virgilio.style.left);
	virgilio.style.left = (vX-10)+"px";
	vX = parseInt(virgilio.style.left);
	if(vX <= virgilioNewStop){  virgilio.style.visibility="hidden"; canVrigilioStop=true; setTimeout(motelDialog6,1000); clearInterval(X);}
	}else{}
	
}


function motelDialog5(){
	document.getElementById("dialogo2_motel").style.visibility="hidden";
	desaparecerVirgilio();
	X = setInterval(desaparecerVirgilio,150);
}

function motelDialog7(){
	document.getElementById("dialogo3_motel").style.visibility="hidden";
	
	changeMoveAbility(true);
}

function motelDialog6(){
	document.getElementById("dialogo3_motel").style.visibility="visible";
	setTimeout(motelDialog7,2500);
}

function motelDialog1(){
	document.getElementById("dialogo1_motel").style.visibility="visible";
	setTimeout(motelDialog2,2500);
}

function motelDialog2(){
	document.getElementById("dialogo1_motel").style.visibility="hidden";
	setTimeout(motelDialog3,500);
}

function motelDialog3(){
	document.getElementById("dialogo_opcao_motel").style.visibility="visible";
}

function moveVirgilio(){
	if(moveVirgilex == true){
		var vX = parseInt(virgilio.style.left);
		virgilio.style.left = (vX-10)+"px";
		vX = parseInt(virgilio.style.left);
		if(vX <= virgilioStop){ moveVirgilex=false; setTimeout(motelDialog1,1000); clearInterval(X);}
	}
}

function startAnim_motel(){
	document.cookie="hasSeenDialogMotel=true";
	X = setInterval(moveVirgilio,200);
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
			movement(tec.key, "motel");
			verificarSePodeInteragir_motel();
		break;
	}
}