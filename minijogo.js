var objectos = new Array("cha","mel","cigarro","vinho");
var ht;
var pX,pY;
var mainId = document.getElementById("div_minijogo");
var pers;
var strPMJ = '<img id="personagem_mj" src="imagens/minijogo/personagem.png"/>';

var arrayObjectos = new Array();

var intervalX,itemCounter=0;
var moveItems;

var hasStarted=false;

var score=0;

var caughtArray = new Array();

window.onload = function(){

	ht = parseInt(getCookie("health"));
	
	incrementHealth(ht,0);
	drawHealth(ht);
	
	loadItems();
	
	mainId.innerHTML+=strPMJ;
	
	pers = document.getElementById("personagem_mj");
	pers.style.position = "absolute";
	pers.style.left = (parseInt(window.innerHeight)/2)+"px";
	pers.style.top = (parseInt(window.innerHeight)/2)+"px";
	pers.style.width= convertPercentages_mj(7,"left");
	pers.style.height = convertPercentages_mj(10,"top");
	
	//setInterval(,20000); //switch objects spawn
	setTimeout(endGame,45000); //end game
	
	var nome_hud = getCookie("name");
	document.getElementById("nome_personagem").innerHTML = nome_hud;
}

setInterval(verificaColisao, 1)

function endGame(){
	clearInterval(moveItems);
	clearInterval(intervalX);

	if(score <= 0 ) {
		incrementHealth(ht,-10);
		drawHealth(ht);
		document.getElementById("zero").style.visibility = "visible";
	}
	else if(score > 0 && score < 10){
		incrementHealth(ht,5);
		drawHealth(ht);
		document.getElementById("mais_cinco").style.visibility = "visible";
	} else if(score >= 10){
		incrementHealth(ht,10);
		drawHealth(ht);
		document.getElementById("mais_dez").style.visibility = "visible";
	}

	setTimeout(function () {
		window.location.href="cutscene1.html";
	}, 3000);
}

function loadItems(){
	for(i=1; i <21; i++){
		var itemN = parseInt(Math.random() * 4) + 0;  //0 -  3  [0,1,2,3]  M-m+1 + m
		var str = '<img id="' + i + '" src="imagens/minijogo/'+objectos[itemN]+".png"+'" class="obst_mini" >'; 
		mainId.innerHTML += str; 
		document.getElementById(i).style.position = "absolute";
		document.getElementById(i).style.visibility = "hidden";
		document.getElementById(i).style.top = "0px";
		var l = parseInt(Math.random() * (window.innerHeight-40) - 0 + 1 ) + 0;
		document.getElementById(i).style.left = l+"px";
		document.getElementById(i).style.width = convertPercentages_mj(10,"left");
		document.getElementById(i).style.height = convertPercentages_mj(10,"top");	
	}
	
	intervalX = setInterval(dropItems,2000);
	moveItems = setInterval(moveObjects,50);
}

function moveObjects(){
	if(hasStarted==false){}else{
		for ( i = 0 ; i < arrayObjectos.length ; i++){
			document.getElementById(arrayObjectos[i]).style.top = (parseInt(document.getElementById(arrayObjectos[i]).style.top) + 10) + "px";
		}
	}
}

function dropItems(){
	itemCounter++;
	if(itemCounter>20){clearInterval(intervalX); }else{
	document.getElementById(itemCounter).style.visibility="visible";
	arrayObjectos.push(itemCounter); 
	if(hasStarted==false){hasStarted=true; }
	}
	//alert(arrayObjectos.length);
}

function verificaColisao(){
	for( i = 0 ; i < arrayObjectos.length ; i++) {
		var objX = parseInt(document.getElementById(arrayObjectos[i]).style.left);
		var objY = parseInt(document.getElementById(arrayObjectos[i]).style.top);
		var objW = parseInt(document.getElementById(arrayObjectos[i]).style.width);
		var objH = parseInt(document.getElementById(arrayObjectos[i]).style.height);
		
		var newPX = (pX + (pers.width/2)); 
		
		var pOne = objX;
		var pTwo = objX+objW;
		var pThree = objY;
		var pFour = objY+objH;
		
		if(newPX > pOne && newPX < pTwo){
			if(pY > pThree && pY < pFour){
				
				var objetoColidido = arrayObjectos[i];
				
				if(document.getElementById(arrayObjectos[i]).style.visibility == "visible"){
				document.getElementById(arrayObjectos[i]).style.display = "none";
				}
				
				var sourceImg = document.getElementById(arrayObjectos[i]).src;			
					
				if((sourceImg.includes("imagens/minijogo/cigarro.png"))||
				(sourceImg.includes("imagens/minijogo/vinho.png"))){
					score--;
				}
				else{
					score++;
				}
			}
		}
	}
}


function convertPercentages_mj(perc,txt){
	var iH = parseInt(window.innerHeight);
	var divH = iH;
	var divW = divH-40;
	
	switch(txt){
		case"left":
			return (((perc/100)*divW)+"px");
		break;
		case"top":
			return (((perc/100)*divH)+"px");
		break;
	}
}

window.onkeypress = function(eg){
	
	pX = parseInt(pers.style.left);
	pY = parseInt(pers.style.top);
	
	switch(eg.key){
		case "i":
		if(document.getElementById("hud_hud").style.visibility=="visible" || document.getElementById("hud_hud").style.visibility==""){
			document.getElementById("hud_hud").style.visibility="hidden";
		}else{
			document.getElementById("hud_hud").style.visibility="visible";
		}
		break;
		case "w":
			pers.style.top = (pY-10)+"px";
			verificaLimites_mj();
			verificaColisao();
		break;
		case "a":
			pers.style.left = (pX-10)+"px";
			verificaLimites_mj();
			verificaColisao();
		break;
		case "s":
			pers.style.top = (pY+10)+"px";
			verificaLimites_mj();
			verificaColisao();
		break;
		case "d":
			pers.style.left = (pX+10)+"px";
			verificaLimites_mj();
			verificaColisao();
		break;
		default:
		break;
	}
}

function verificaLimites_mj(){
	if(pY < 0){
		pers.style.top = window.innerHeight+"px";
	}
	else if(pY > window.innerHeight){
		pers.style.top = "0px";
	}
	else if(pX > window.innerHeight){
		pers.style.left = "0px";
	}
	else if(pX < 0){
		pers.style.left = window.innerHeight+"px";
	}
}