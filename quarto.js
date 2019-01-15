var ht;

window.onload = function(){
	
	ht = parseInt(getCookie("health"));
	
	incrementHealth(ht,0);
	drawHealth(ht);

	
	fodeteBugDoCSS("quarto");
	var pers = document.getElementById("personagem");
	
	
	initializeDetection();
	
	//not forget : por em %
	pers.style.top= convertPercentages(44.6,"top");
	pers.style.left= convertPercentages(27.7,"left");
	
	
	document.getElementById("opcao_1_quarto").onclick = function(){
	    document.getElementById("ar_condicionado_audio").play();
		ht = incrementHealth(ht,-10);
		drawHealth(ht);   
		document.getElementById("dialogo_opcao_quarto").style.visibility="hidden"; 
		//roomDialog6(); 
		document.cookie="hasSeenRoom=true"; };
	
	document.getElementById("opcao_2_quarto").onclick = function(){
        document.getElementById("ar_condicionado_audio").play();
	ht = incrementHealth(ht,-5);
		drawHealth(ht);   
		document.getElementById("dialogo_opcao_quarto").style.visibility="hidden"; 
		//roomDialog6(); 
		document.cookie="hasSeenRoom=true"; };
	
	document.getElementById("opcao_3_quarto").onclick = function(){
        document.getElementById("ar_condicionado_audio").play();
	ht = incrementHealth(ht,5);
		drawHealth(ht);   
		document.getElementById("dialogo_opcao_quarto").style.visibility="hidden"; 
		//roomDialog6(); 
		document.getElementById("ar_quente").style.visibility="visible"; 
		document.cookie="hasSeenRoom=true"; } ;
	
	document.getElementById("opcao_4_quarto").onclick = function(){
        document.getElementById("ar_condicionado_audio").play();
	ht = incrementHealth(ht,10);
		drawHealth(ht);
		document.getElementById("dialogo_opcao_quarto").style.visibility="hidden"; 
		//roomDialog6();
		document.getElementById("ar_quente").style.visibility="visible"; 
		document.cookie="hasSeenRoom=true"; };
	
	if(getCookie("hasSeenRoom")=="false"){ 
		setTimeout(roomDialog1,1000);
	}
	
	var nome_hud = getCookie("name");
	document.getElementById("nome_personagem").innerHTML = nome_hud;
}

function roomDialog1(){
	document.getElementById("dialogo1_quarto").style.visibility="visible";
	setTimeout(roomDialog2,2500);
}

function roomDialog2(){
	document.getElementById("dialogo1_quarto").style.visibility="hidden";
	setTimeout(roomDialog3,500);
}

function roomDialog3(){
	document.getElementById("dialogo2_quarto").style.visibility="visible";
	setTimeout(roomDialog4,2500);
}

function roomDialog4(){
	document.getElementById("dialogo2_quarto").style.visibility="hidden";
	setTimeout(roomDialog5,500);
}

function roomDialog5(){
	document.getElementById("dialogo_opcao_quarto").style.visibility="visible";
}

window.onkeypress = function (tec){
	var op = document.getElementById("body_palco").style.opacity;
	op=1;

	switch(tec.key){
		case "e":

			var timer = setInterval(function () {
				if(op <= 0.01){
					clearInterval(timer);
					//document.getElementById("body_palco").style.visibility="hidden";
				}
				document.getElementById("body_palco").style.opacity = op;
				document.getElementById("body_palco").style.filter = 'alpha(opacity=' + op * 100 + ")";
				op -= op*0.1;
			}, 50);

			document.getElementById("som_dormir").play();

			setTimeout(keypressreceived,6000);
			setTimeout(function () {
				window.location.href="sonho.html";
			},6000);

		break;
		case "i":
		if(document.getElementById("hud_hud").style.visibility=="visible" || document.getElementById("hud_hud").style.visibility==""){
			document.getElementById("hud_hud").style.visibility="hidden";
		}else{
			document.getElementById("hud_hud").style.visibility="visible";
		}
		break;

		
		default:	
			movement(tec.key, "quarto");
		break;
	}
}