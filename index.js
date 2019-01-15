var ht;
var pers;
var dialog;

window.onload = function(){

	

	document.getElementById("guitarra").onclick = function () {
		document.getElementById("carrinha_guitarra_audio")	.play();
	};

	document.getElementById("radio").onclick = function () {
		document.getElementById("carrinha_radio_audio").play();
	};


	function esconder_dialogo_caixote(){
		document.getElementById("dialogo_caixote").style.visibility="hidden";
	}

	function esconder_dialogo_cama(){
		document.getElementById("dialogo_cama").style.visibility="hidden";
	}

	document.getElementById("caixote").onclick = function () {
		document.getElementById("dialogo_caixote").style.visibility="visible";
		setTimeout(esconder_dialogo_caixote, 2500);
	};

	document.getElementById("cama").onclick = function () {
		document.getElementById("dialogo_cama").style.visibility="visible";
		setTimeout(esconder_dialogo_cama, 2500);
	};

	

	/*game boot*/
	document.cookie = "health=50";
	ht=50;
	incrementHealth(ht,0);
	drawHealth(ht);
	
	
	fodeteBugDoCSS("index");
	pers = document.getElementById("personagem");
	dialog=document.getElementById("dialogo_1");
	
	initializeDetection();
	 
	//not forget : por em %
	pers.style.top= convertPercentages(42.7,"top");
	pers.style.left= convertPercentages(62.6,"left");
	
	if(getCookie("hasSeenDialogRestaurant")==null){ document.cookie="hasSeenDialogRestaurant=false"; }
	if(getCookie("hasSeenDialogMotel")==null){ document.cookie="hasSeenDialogMotel=false"; }
	if(getCookie("hasSeenDialog")==null){ document.cookie="hasSeenDialog=false"; }
	if(getCookie("hasSmoked")==null){ document.cookie="hasSmoked=false"; }
	if(getCookie("hasSeenRoom")==null){ document.cookie="hasSeenRoom=false"; }
	
	if(getCookie("hasSeenDialog")=="true"){}
	else{
			setTimeout(a,3000);
	}
	
	var nome_hud = getCookie("name");
	document.getElementById("nome_personagem").innerHTML = nome_hud;
	//ht = parseInt(getCookie("health"));
}

function a(){
		dialog.style.visibility="visible";
		setTimeout(b,3000);
		document.cookie="hasSeenDialog=true";
}
function b(){
	dialog.style.visibility="hidden";
	setTimeout(c,1000);
}

function c(){
	document.getElementById("dialogo_2").style.visibility="visible";
	setTimeout(function(){
		document.getElementById("dialogo_2").style.visibility="hidden";
	},3000);
}

//invisible border

/*
|---|
|   |
|___|

*/




var xPosBorder = parseInt(convertPercentages(13.3,"left"));
var yPosBorder = parseInt(convertPercentages(48.4,"top"));
var borderWidth = parseInt(convertPercentages(76.2,"left"));
var borderHeight = parseInt(convertPercentages(27.0,"top"));

function checkBorderColl(){
	pX=parseInt(pers.style.left);
	pX2 = pX+parseInt(pers.style.width);
	pY=parseInt(pers.style.top)+(0.894*parseInt(pers.style.height));
	pY2 = pY;
	
	if(pX < xPosBorder || pX2 < xPosBorder){
		pers.style.left = (pX+5)+"px";
	}
	else if(pX > (xPosBorder+borderWidth) || pX2 > (xPosBorder+borderWidth)){
		pers.style.left = (pX-5)+"px";
	}
	else if(pY < yPosBorder || pY2 < yPosBorder){
		pers.style.top = (pY+5-(0.894*parseInt(pers.style.height)))+"px";
	}
	else if(pY > (yPosBorder+borderHeight) || pY2 > (yPosBorder+borderHeight)){
		pers.style.top = (pY-5-(0.894*parseInt(pers.style.height)))+"px";
	}
}

window.onkeydown = function (tec){
	
	switch(tec.key){
		case "i":
		if(document.getElementById("hud_hud").style.visibility=="visible" || document.getElementById("hud_hud").style.visibility==""){
			document.getElementById("hud_hud").style.visibility="hidden";
		}else{
			document.getElementById("hud_hud").style.visibility="visible";
		}
		break;
	
		
		default:
			movement(tec.key,"index");
		break;
	}
	
	checkBorderColl(tec.key);

}

/*
game starts ~writes health zero to cookie
whatever changes health, writes to cookies as well
*/

