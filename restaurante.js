var ht;

var pX,pY;

var interactPointX = parseInt(convertPercentages(40.1,"left"));
var interactPointY = parseInt(convertPercentages(40.4,"top"));
var interactPointW = parseInt(convertPercentages(15.0,"left"));
var interactPointH = parseInt(convertPercentages(6.6,"top"));

window.onload = function(){

	
	document.getElementById("diner_door").play();

	document.getElementById("jukebox_diner").onclick = function(){
		document.getElementById("jukebox_audio").play()
	};


	ht = parseInt(getCookie("health"));
	
	incrementHealth(ht,0);
	drawHealth(ht);

	fodeteBugDoCSS("restaurante");
	var pers = document.getElementById("personagem");
	
	
	initializeDetection();
	
	//not forget : por em %
	pers.style.top= convertPercentages(71,"top");
	pers.style.left= convertPercentages(46.7,"left");
	
	document.getElementById("opcao_1").onclick = function(){ chooser(1);};
	document.getElementById("opcao_2").onclick = function(){ chooser(2);};
	document.getElementById("opcao_3").onclick = function(){ chooser(3);};
	document.getElementById("opcao_4").onclick = function(){ chooser(4);};
	
	var nome_hud = getCookie("name");
	document.getElementById("nome_personagem").innerHTML = nome_hud;
}

function chooser(id){
	switch(id){
		case 1:
			ht = incrementHealth(ht,-10);
			drawHealth(ht);

		
			document.getElementById("bad_drink_audio").play();
		break;
		case 2:
			ht = incrementHealth(ht,5);
			drawHealth(ht);

		
			document.getElementById("good_drink_audio").play();
		break;
		case 3:
			ht = incrementHealth(ht,-5);
			drawHealth(ht);

		
			document.getElementById("bad_drink_audio").play();
		break;
		case 4:
			ht = incrementHealth(ht,10);
			drawHealth(ht);

			document.getElementById("good_drink_audio").play();
		break;
	}	
	
	document.getElementById("dialogo_opcao_restaurante").style.visibility="hidden";
	document.getElementById("dialogo5_restaurante").style.visibility = "visible";
	setTimeout(dialog8_restaurant, 2000);
}


window.onkeypress = function (tec){
	
	switch(tec.key){
		case "e":
			keypressreceived("e");
		break;
		case "i":
		if(document.getElementById("hud_hud").style.visibility=="visible" || document.getElementById("hud_hud").style.visibility==""){
			document.getElementById("hud_hud").style.visibility="hidden";
		}else{
			document.getElementById("hud_hud").style.visibility="visible";
		}
		break;
	
		default:
			movement(tec.key,"restaurante");
			verificarSePodeInteragir();
		break;
	}
	
	
}




function verificarSePodeInteragir(){
	pX=parseInt(pers.style.left);
	pX2 = pX+parseInt(pers.style.width);
	pY=parseInt(pers.style.top)+(0.894*parseInt(pers.style.height));
	pY2 = pY;
	
	if ( (pX > interactPointX && pX < interactPointX+interactPointW) || (pX2 > interactPointX && pX2 < interactPointX+interactPointW) ){
		if ( pY > interactPointY && pY < interactPointY+interactPointH ){
			if(getCookie("hasSeenDialogRestaurant")=="true"){ }else{
				canInteract=["restaurante",0];
			}
		}			
	}else{
		if ( !( pY > interactPointY && pY < interactPointY+interactPointH ) ){
			canInteract= new Array(1,2); 
		}	
	}
	/*
	
	|-------|
	|       |
	|-------|
	*/
}

function dialog8_restaurant(){
	document.getElementById("dialogo5_restaurante").style.visibility="hidden";
	changeMoveAbility(true);
}
function dialog7_restaurant(){
	document.getElementById("dialogo4_restaurante").style.visibility="hidden";
	document.getElementById("dialogo_opcao_restaurante").style.visibility="visible";
}
function dialog6_restaurant(){
	document.getElementById("dialogo4_restaurante").style.visibility="visible";
	setTimeout(dialog7_restaurant,2500);
}
function dialog5_restaurant(){
	document.getElementById("dialogo3_restaurante").style.visibility="hidden";
	setTimeout(dialog6_restaurant,500);
}
function dialog4_restaurant(){
	document.getElementById("dialogo3_restaurante").style.visibility="visible";
	setTimeout(dialog5_restaurant,2600);
}
function dialog3_restaurant(){
	document.getElementById("dialogo2_restaurante").style.visibility="hidden";
	setTimeout(dialog4_restaurant,500);
}
function dialog2_restaurant(){
	document.getElementById("dialogo2_restaurante").style.visibility="visible";
	setTimeout(dialog3_restaurant,3100);
}
function dialog1_restaurant(){
	document.getElementById("dialogo1_restaurante").style.visibility="hidden";
	setTimeout(dialog2_restaurant,500);
}