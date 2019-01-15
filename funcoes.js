/*
	fornecer os ids dos objetos em uma array
	ciclar a array e recolher os dados necessarios pa
	calcular os limites (que serao maybe guardados em varias arrays)
	
	mais tarde: 
	
	separar os obstaculos por niveis
*/
var canMove = true;
var currentLevel;
var playerCount=1;
var healthAmt=0;

var cX,cY;
var obstacleIds;
var iH,iW; 

var canInteract = new Array(1,2);

var xPosBorder,yPosBorder,borderWidth,borderHeight;


var ptOne=[0],ptTwo=[0],ptThree=[0],ptFour=[0];

var healthBar = document.getElementById("healthbarv2");
var pers = document.getElementById("personagem");
var pX,pY;

//index
var pers,cama,caixote,caixa,guitarra,mesa,redirect_carrinha;
//restaurante
var balcao,balcao_entrada_1,balcao_entrada_2,banco_1,banco_2,banco_3,bancos_cima,mesa1,mesa2,redirect_restaurante;
//motel
var planta,sofa,sofa2,mesa_sofa,redirect_motel,redirect2_motel,virgilio;
//corredor
var redirect_corredor_1,redirect_corredor_2;
//quarto
var fridge_by_blums,cama_quarto,lamp_quarto,mesa_quarto,redirect_quarto;
//parque1
var carrinha_parque,redirect1_parque1,redirect2_parque1;
//parque2
var redirect1_parque2,redirect2_parque2,redirect3_parque2;
//parque3
var redirect1_parque3,redirect2_parque3;

//palco
var guitarra_palco,mic_palco; var tocouNoMic=false;


function changeMoveAbility(a){
	canMove = a;
}

function Check_interaction_xisde() {
	if(canInteract[0] != 1 && canInteract[1] != 2){
		document.getElementById("interacao_e").style.visibility="visible";
	} else {
		document.getElementById("interacao_e").style.visibility="hidden";
	}
}

setInterval(Check_interaction_xisde, 5);

function keypressreceived(key){
	switch(key){
		case "e":
		
		if(tocouNoMic==true){palco_interactFunc(); }
		
			if(canInteract[0] != 1 && canInteract[1] != 2){
				switch(canInteract[0]){
					case "restaurante":
						switch(canInteract[1]){
							case 0:
								//launch cookie
								changeMoveAbility(false);

								document.cookie = "hasSeenDialogRestaurant=true";
								if(getCookie("hasSeenDialogRestaurant")=="false"){ }
								
								document.getElementById("dialogo1_restaurante").style.visibility="visible";
								canInteract=[1,2];
								setTimeout(dialog1_restaurant,2500);
							break;
						}
					break;
					case "quarto":
						switch(canInteract[1]){
							case 1:
								window.location = "sonho.html";
							break;
						}
					break;
					case "palco":						
						switch(canInteract[1]){
							case 1:
							//	alert("FODASSE");
							break;
						}
					break;
				}
			}else{
				
			}	
		break;
	}
}

//pedro
function initializeDetection(){
	//to be called on every page load
	
	switch(currentLevel){
		case "index":
			obstacleIds = new Array("cama","caixote","caixa","guitarra","mesa","redirect_carrinha");
			ptOne=[0];ptTwo=[0];ptThree=[0];ptFour=[0];
		break;
		case "restaurante":
			obstacleIds = new Array("balcao","balcao_entrada_1","balcao_entrada_2","banco_1",
			"banco_2","banco_3","bancos_cima","mesa1","mesa2","redirect_restaurante");
			ptOne=[0];ptTwo=[0];ptThree=[0];ptFour=[0];
		break;
		case "motel":
			obstacleIds = new Array("planta","sofa","sofa2","mesa_sofa","redirect_motel","redirect2_motel");
			ptOne=[0];ptTwo=[0];ptThree=[0];ptFour=[0];
		break;
		case "corredor":
			obstacleIds = new Array("redirect_corredor_1","redirect_corredor_2");
			ptOne=[0];ptTwo=[0];ptThree=[0];ptFour=[0];
		break;
		case "quarto":
			obstacleIds = new Array("fridge_by_blums","cama_quarto","lamp_quarto","mesa_quarto","redirect_quarto");
			ptOne=[0];ptTwo=[0];ptThree=[0];ptFour=[0];
		break;
		case "parque1":
			obstacleIds = new Array("carrinha_parque","redirect1_parque1","redirect2_parque1");
			ptOne=[0];ptTwo=[0];ptThree=[0];ptFour=[0];
		break;
		case "parque2":
			obstacleIds = new Array("redirect1_parque2","redirect2_parque2","redirect3_parque2");
			ptOne=[0];ptTwo=[0];ptThree=[0];ptFour=[0];
		break;
		case "parque3":
			obstacleIds = new Array("redirect1_parque3","redirect2_parque3");
			ptOne=[0];ptTwo=[0];ptThree=[0];ptFour=[0];
		break;
		case "palco":
			obstacleIds = new Array("guitarra_palco","mic_palco");
			ptOne=[0];ptTwo=[0];ptThree=[0];ptFour=[0];
		break;
		default:
			obstacleIds = new Array();
			ptOne=[0];ptTwo=[0];ptThree=[0];ptFour=[0];
		break;
	}
	
	//console.log(obstacleIds);
	
	for (i = 0; i < obstacleIds.length; i++){
		var x = document.getElementById(obstacleIds[i]);
		//console.log(x);
		if(i==0){
			ptOne[i]=parseInt(x.style.left);
			ptTwo[i]=(ptOne[i]+parseInt(x.width));
			ptThree[i]=(parseInt(x.style.top));
			ptFour[i]= (ptThree[i]+parseInt(x.height));
		}else{
			ptOne.push(parseInt(x.style.left));
			ptTwo.push((ptOne[i]+parseInt(x.width)));
			ptThree.push((parseInt(x.style.top)));
			ptFour.push(ptThree[i]+parseInt(x.height));
		}
	}
	
	
}

function checkColisionIndex(index,level){
	switch(level){
		case "index":
			switch(index){
				case 5:
					window.location="parque1.html";
				break;
			}
		break;
		case "motel":
			switch(index){
				case 5:
					if(getCookie("hasSeenDialogMotel")=="true"){
						window.location="corredor.html";
					}
				break;
				case 4:
					window.location="parque3.html";
				break;
			}
		break;
		case "restaurante":
			switch(index){
				case 0:
					//alert("Pressiona E para interagir..");
					//canInteract=[level,index];
				break;
				case 9:
					window.location="parque2.html";
				break;
			}
		break;
		case "corredor":
			switch(index){
			    case 0:
					window.location = "motel.html";
				break;
				case 1:
					window.location = "quarto.html";
				break;
			}
		break;
		case "quarto":
			switch(index){
				case 1:
					canInteract=[level,index];
				break;
			    case 4:
					window.location = "corredor.html";
				break;
			}
		break;
		case "parque1":
			switch(index){
				case 1:
					window.location = "parque2.html";
				break;
				case 2:
					window.location = "index.html";
				break;
			}
		break;
		case "parque2":
			switch(index){
				case 0:
					window.location = "parque3.html";
				break;
				case 1:
					window.location = "restaurante.html";
				break;
				case 2:
					window.location = "parque1.html";
				break;
			}
		break;
		case "parque3":
			switch(index){
				case 0:
					window.location = "parque2.html";
				break;
				case 1:
					//IF RESTAURANT DIALOG HAS NOT BEEN COMPLETED! U CANT ENTER
					if(getCookie("hasSeenDialogRestaurant")=="true"){
						window.location = "motel.html";
					}else{}
				break;
			}
		break;
		case "palco":
			switch(index){
				case 1:
					tocouNoMic=true;
				break;
			}
		break;
		default:
			//canInteract=[1,2];
		break;
	}
	
}

function checkBorderCollFNC(){
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


function detectObstacles(tecla,nivel){
	
	pX=parseInt(pers.style.left);
	pX2 = pX+parseInt(pers.style.width);
	pY=parseInt(pers.style.top)+(0.894*parseInt(pers.style.height));
	pY2 = pY;
	//console.log(pX,pX2,pY,pY2);
	
	
	switch(nivel){
		
		case "restaurante":
			xPosBorder = 0;
			yPosBorder = 0+parseInt(convertPercentages(14.8,"top"));
			borderWidth = parseInt(window.innerHeight);
			borderHeight = parseInt(convertPercentages(85.2,"top"));
			
			checkBorderCollFNC();
		break;
		case "motel":
			xPosBorder = 0;
			yPosBorder = 0+parseInt(convertPercentages(30.3,"top"));
			borderWidth = parseInt(window.innerHeight);
			borderHeight = parseInt(convertPercentages(69.7,"top"));
			
			checkBorderCollFNC();
		break;
		case "corredor":
			xPosBorder=0;
			yPosBorder=0+parseInt(convertPercentages(51.7,"top"));
			borderWidth=parseInt(window.innerHeight);
			borderHeight = parseInt(convertPercentages(20.1,"top"));
			
			checkBorderCollFNC();
		break;
		case "quarto":
			xPosBorder=parseInt(convertPercentages(12.3,"left"));
			yPosBorder=0+parseInt(convertPercentages(51.4,"top"));
			borderWidth=parseInt(convertPercentages(75.7,"left"));
			borderHeight = parseInt(convertPercentages(22.9,"top"));
			
			checkBorderCollFNC();
		break;
		case "parque1":
			xPosBorder = 0;
			yPosBorder = 0+parseInt(convertPercentages(80,"top"));
			borderWidth = parseInt(window.innerHeight);
			borderHeight = parseInt(convertPercentages(20,"top"));
			
			checkBorderCollFNC();
		break;
		case "parque2":
			xPosBorder = 0;
			yPosBorder = 0+parseInt(convertPercentages(88,"top"));
			borderWidth = parseInt(window.innerHeight);
			borderHeight = parseInt(convertPercentages(12,"top"));
			
			checkBorderCollFNC();
		break;
		case "parque3":
			xPosBorder = 0;
			yPosBorder = 0+parseInt(convertPercentages(88,"top"));
			borderWidth = parseInt(window.innerHeight);
			borderHeight = parseInt(convertPercentages(12,"top"));
			
			checkBorderCollFNC();
		break;
		case "palco":
			xPosBorder = 0;
			yPosBorder = 0+parseInt(convertPercentages(54.2,"top"));
			borderWidth = parseInt(window.innerHeight);
			borderHeight = parseInt(convertPercentages(17.4,"top"));
			
			checkBorderCollFNC();
		break;
		default:
		break;
	}
	
	
	for( i = 0 ; i < obstacleIds.length; i++ ){
		//console.log(ptOne[i],ptTwo[i],ptThree[i],ptFour[i]);
		if((pX > ptOne[i] && pX < ptTwo[i] && pY > ptThree[i] && pY < ptFour[i])||
		(pX2 > ptOne[i] && pX2 < ptTwo[i] && pY2 > ptThree[i] && pY2 < ptFour[i])){
			cY = pY;
			cX = pX;
			
			checkColisionIndex(i,nivel);
			switch(tecla){
				case "w":
					pers.style.top= (cY+5-(0.894*parseInt(pers.style.height)))+"px";
					pers.style.left= cX+"px";
				break;
				case "a":
					pers.style.top= (cY-(0.894*parseInt(pers.style.height)))+"px";
					pers.style.left= (cX+5)+"px";
				break;
				case "s":
					pers.style.top= (cY-5-(0.894*parseInt(pers.style.height)))+"px";
					pers.style.left= cX+"px";
				break;
				case "d":	
					pers.style.top= (cY-(0.894*parseInt(pers.style.height)))+"px";
					pers.style.left= (cX-5)+"px";
				break;
			}
		}
		
	}
}

function cyclePlayer(direction){
	var src;
	switch(direction){
		case "front":
			src= ("imagens/geral/walking front/Prancheta "+playerCount+".png");
		break;
		case "down":
			src= ("imagens/geral/walking back/Prancheta "+playerCount+".png");
		break;
		case "left":
			src= ("imagens/geral/walking left/Prancheta "+playerCount+".png");
		break;
		case "right":
			src= ("imagens/geral/walking right/Prancheta "+playerCount+".png");
		break;
	} 
	pers.src = src;
	playerCount++;
	if(playerCount==5){playerCount=1;}
}

function drawHealth(health){
	healthBar.innerHTML = "";
	var nGreens = health/5;
	var imgPath = "imagens/geral/5vp.png";
		
	var currentPos;
	
	//var size = parseInt(convertPercentages(1,"left"));
	
	if(health==0){}else{
	
		for(i=0;i<nGreens;i++){
			healthBar.innerHTML += ('<img src="'+imgPath+'" id="hp'+i+'">');
			document.getElementById("hp"+i).style.width=convertPercentages(1.114,"left");
			document.getElementById("hp"+i).style.height=convertPercentages(3.283,"top");
			//console.log(('<img src="'+imgPath+'" id="hp'+i+'">'));
		}
		
		for(i=0;i<nGreens;i++){
			document.getElementById("hp"+i).style.left += (0+(15*i)+"px");
		}
	}
}

function incrementHealth(health,increment){
	
	if((health+increment)>100){healthAmt=100;checkHealth();return 100;}
	else if((health+increment)<0){healthAmt=0;checkHealth();return 0;}
	else{
		healthAmt = health+increment;
		checkHealth();
		return health+=increment;
	}
	
	
	
}

function movement(tecla,nivel){
	
	
	if(canMove==false){}else{
	
	pos_top = parseInt(pers.style.top);
    pos_left = parseInt(pers.style.left);
	
	
	switch(tecla){
		case "w":
            pers.style.top = pos_top - 5 + "px";
         //   deteta_limites();
			detectObstacles(tecla,nivel);
			cyclePlayer("front");
                break;
        case "s":
            pers.style.top = pos_top + 5 + "px";
         //   deteta_limites();
			detectObstacles(tecla,nivel);
			cyclePlayer("down");
			
                break;
        case "a":
            pers.style.left = pos_left - 5 + "px";
         //   deteta_limites();
			detectObstacles(tecla,nivel);
			cyclePlayer("left");
				
                break;
        case "d":
            pers.style.left = pos_left + 5 + "px";
         //   deteta_limites();
			detectObstacles(tecla,nivel);
			cyclePlayer("right");
                break;
	}
	}
	
}

function convertPercentages(perc,txt){
	iH = parseInt(window.innerHeight);
	var divH = iH;
	var divW = divH;
	
	switch(txt){
		case"left":
			return (((perc/100)*divW)+"px");
		break;
		case"top":
			return (((perc/100)*divH)+"px");
		break;
	}
}

function checkHealth(){
	document.cookie = ("health="+healthAmt);
	return healthAmt;
}

function getCookie(name)
{
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}

function fodeteBugDoCSS(html){
	
	
	pers.style.height = convertPercentages(21.25,"top");
	pers.style.width = convertPercentages(8.75,"left");
	
	switch(html){
		case "index":{
			currentLevel="index";
			
			cama = document.getElementById("cama");
			caixote = document.getElementById("caixote");
			caixa = document.getElementById("caixa");
			guitarra = document.getElementById("guitarra");
			mesa = document.getElementById("mesa");
			redirect_carrinha = document.getElementById("redirect_carrinha");
			
			
			cama.width=convertPercentages(47.92,"left");
			cama.height=convertPercentages(14.38,"top");
			cama.style.left= convertPercentages(13,"left");
			cama.style.top = convertPercentages(60,"top");
	
			caixote.width=convertPercentages(7.19,"left");
			caixote.height=convertPercentages(9.74,"top");
			caixote.style.left= convertPercentages(80,"left");
			caixote.style.top = convertPercentages(65,"top");
	
			caixa.width=convertPercentages(11.82,"left");
			caixa.height=convertPercentages(12.94,"top");
			caixa.style.left= convertPercentages(14,"left");
			caixa.style.top = convertPercentages(41,"top");
	
			guitarra.width=convertPercentages(6.07,"left");
			guitarra.height=convertPercentages(12.62,"top");
			guitarra.style.left= convertPercentages(27,"left");
			guitarra.style.top = convertPercentages(38,"top");
	
			mesa.width=convertPercentages(21.40,"left");
			mesa.height=convertPercentages(8.79,"top");
			mesa.style.left= convertPercentages(33,"left");
			mesa.style.top = convertPercentages(43,"top");
			
			redirect_carrinha.width=convertPercentages(8,"left");
			redirect_carrinha.height=convertPercentages(2,"top");
			redirect_carrinha.style.left= convertPercentages(57,"left");
			redirect_carrinha.style.top = convertPercentages(48.5,"top");
		}
		break;
		case "restaurante":{
			currentLevel="restaurante";
			
			
			balcao = document.getElementById("balcao");
			balcao_entrada_1 = document.getElementById("balcao_entrada_1");
			balcao_entrada_2 = document.getElementById("balcao_entrada_2");
			banco_1 = document.getElementById("banco_1");
			banco_2 = document.getElementById("banco_2");
			banco_3 = document.getElementById("banco_3");
			bancos_cima = document.getElementById("bancos_cima");
			mesa1 = document.getElementById("mesa1");
			mesa2 = document.getElementById("mesa2");
			redirect_restaurante = document.getElementById("redirect_restaurante");
			
			balcao.width=convertPercentages(58.31,"left");
			balcao.height=convertPercentages(27.16,"top");
			balcao.style.left= convertPercentages(0,"left");
			balcao.style.top = convertPercentages(14,"top");
	
			balcao_entrada_1.width=convertPercentages(33.55,"left");
			balcao_entrada_1.height=convertPercentages(9.42,"top");
			balcao_entrada_1.style.left= convertPercentages(0,"left");
			balcao_entrada_1.style.top = convertPercentages(91,"top");
			
			balcao_entrada_2.width=convertPercentages(33.55,"left");
			balcao_entrada_2.height=convertPercentages(9.42,"top");
			balcao_entrada_2.style.left= convertPercentages(66.5,"left");
			balcao_entrada_2.style.top = convertPercentages(91,"top");
			
			banco_1.width=convertPercentages(8.3,"left");
			banco_1.height=convertPercentages(10.86,"top");
			banco_1.style.left= convertPercentages(5,"left");
			banco_1.style.top = convertPercentages(38,"top");
			
			banco_2.width=convertPercentages(8.3,"left");
			banco_2.height=convertPercentages(10.86,"top");
			banco_2.style.left= convertPercentages(20,"left");
			banco_2.style.top = convertPercentages(38,"top");
			
			banco_3.width=convertPercentages(8.3,"left");
			banco_3.height=convertPercentages(10.86,"top");
			banco_3.style.left= convertPercentages(35,"left");
			banco_3.style.top = convertPercentages(38,"top");
			
			bancos_cima.width=convertPercentages(10.7,"left");
			bancos_cima.height=convertPercentages(23.32,"top");
			bancos_cima.style.left= convertPercentages(55,"left");
			bancos_cima.style.top = convertPercentages(14,"top");
			
			mesa1.width=convertPercentages(20.93,"left");
			mesa1.height=convertPercentages(10.06,"top");
			mesa1.style.left= convertPercentages(1,"left");
			mesa1.style.top = convertPercentages(55,"top");
			
			mesa2.width=convertPercentages(20.93,"left");
			mesa2.height=convertPercentages(10.06,"top");
			mesa2.style.left= convertPercentages(1,"left");
			mesa2.style.top = convertPercentages(70,"top");
			
			redirect_restaurante.width=convertPercentages(30,"left");
			redirect_restaurante.height=convertPercentages(5,"top");
			redirect_restaurante.style.left= convertPercentages(35,"left");
			redirect_restaurante.style.top = convertPercentages(95,"top");
		}
		break;
		case "motel":{
			currentLevel="motel";
			
			planta = document.getElementById("planta");
			sofa = document.getElementById("sofa");
			sofa2 = document.getElementById("sofa2");
			mesa_sofa = document.getElementById("mesa_sofa");
			redirect_motel = document.getElementById("redirect_motel");
			redirect2_motel = document.getElementById("redirect2_motel");
			virgilio = document.getElementById("virgilio");
			
			
			planta.width=convertPercentages(9.5,"left");
			planta.height=convertPercentages(16.62,"top");
			planta.style.left= convertPercentages(90,"left");
			planta.style.top = convertPercentages(16.3,"top");
			
			virgilio.style.left= convertPercentages(60,"left");
			virgilio.style.top = convertPercentages(15,"top");
			
			sofa.width=convertPercentages(9.5,"left");
			sofa.height=convertPercentages(29.5,"top");
			sofa.style.left= convertPercentages(0,"left");
			sofa.style.top = convertPercentages(65,"top");
			
			sofa2.width=convertPercentages(9.5,"left");
			sofa2.height=convertPercentages(24.38,"top");
			sofa2.style.left= convertPercentages(90.5,"left");
			sofa2.style.top = convertPercentages(76,"top");
			
			mesa_sofa.width=convertPercentages(18,"left");
			mesa_sofa.height=convertPercentages(25.25,"top");
			mesa_sofa.style.left= convertPercentages(70,"left");
			mesa_sofa.style.top = convertPercentages(65,"top");
			
			redirect_motel.width=convertPercentages(22,"left");
			redirect_motel.height=convertPercentages(3,"top");
			redirect_motel.style.left= convertPercentages(37.5,"left");
			redirect_motel.style.top = convertPercentages(95,"top");
			
			redirect2_motel.width=convertPercentages(11,"left");
			redirect2_motel.height=convertPercentages(3,"top");
			redirect2_motel.style.left= convertPercentages(4,"left");
			redirect2_motel.style.top = convertPercentages(30,"top");
		}
		break;
		case "corredor":{
			currentLevel="corredor";
			
			redirect_corredor_1 = document.getElementById("redirect_corredor_1");
			redirect_corredor_2 = document.getElementById("redirect_corredor_2");
			
			redirect_corredor_1.width=convertPercentages(3,"left");
			redirect_corredor_1.height=convertPercentages(7,"top");
			redirect_corredor_1.style.left= convertPercentages(95,"left");
			redirect_corredor_1.style.top = convertPercentages(59.5,"top");
			
			redirect_corredor_2.width=convertPercentages(8,"left");
			redirect_corredor_2.height=convertPercentages(2,"top");
			redirect_corredor_2.style.left= convertPercentages(32,"left");
			redirect_corredor_2.style.top = convertPercentages(52.5,"top");
		}
		break;
		case "parque1":{
			currentLevel="parque1";
			
			carrinha_parque = document.getElementById("carrinha_parque");
			redirect1_parque1 = document.getElementById("redirect1_parque1");
			redirect2_parque1 = document.getElementById("redirect2_parque1");
			
			carrinha_parque.width=convertPercentages(63,"left");
			carrinha_parque.height=convertPercentages(26,"top");
			carrinha_parque.style.left= convertPercentages(10,"left");
			carrinha_parque.style.top = convertPercentages(69,"top");
			
			redirect1_parque1.width=convertPercentages(3,"left");
			redirect1_parque1.height=convertPercentages(22,"top");
			redirect1_parque1.style.left= convertPercentages(97,"left");
			redirect1_parque1.style.top = convertPercentages(78,"top");
			
			redirect2_parque1.width=convertPercentages(15,"left");
			redirect2_parque1.height=convertPercentages(2.5,"top");
			redirect2_parque1.style.left= convertPercentages(29,"left");
			redirect2_parque1.style.top = convertPercentages(93,"top");
		}
		break;
		case "parque2":{
			currentLevel="parque2";
			
			redirect1_parque2 = document.getElementById("redirect1_parque2");
			redirect2_parque2 = document.getElementById("redirect2_parque2");
			redirect3_parque2 = document.getElementById("redirect3_parque2");
			
			redirect1_parque2.width=convertPercentages(3,"left");
			redirect1_parque2.height=convertPercentages(22,"top");
			redirect1_parque2.style.left= convertPercentages(97,"left");
			redirect1_parque2.style.top = convertPercentages(78,"top");
			
			redirect2_parque2.width=convertPercentages(15,"left");
			redirect2_parque2.height=convertPercentages(2.5,"top");
			redirect2_parque2.style.left= convertPercentages(47,"left");
			redirect2_parque2.style.top = convertPercentages(88,"top");
			
			redirect3_parque2.width=convertPercentages(3,"left");
			redirect3_parque2.height=convertPercentages(22,"top");
			redirect3_parque2.style.left= convertPercentages(0,"left");
			redirect3_parque2.style.top = convertPercentages(78,"top");
		}
		break;
		case "parque3":{
			currentLevel="parque3";
			
			redirect1_parque3 = document.getElementById("redirect1_parque3");
			redirect2_parque3 = document.getElementById("redirect2_parque3");
			
			redirect1_parque3.width=convertPercentages(3,"left");
			redirect1_parque3.height=convertPercentages(22,"top");
			redirect1_parque3.style.left= convertPercentages(0,"left");
			redirect1_parque3.style.top = convertPercentages(78,"top");
			
			redirect2_parque3.width=convertPercentages(15,"left");
			redirect2_parque3.height=convertPercentages(2.5,"top");
			redirect2_parque3.style.left= convertPercentages(64,"left");
			redirect2_parque3.style.top = convertPercentages(88,"top");
		}
		break;
		case "palco":{
			currentLevel="palco";
			
			guitarra_palco = document.getElementById("guitarra_palco");
			mic_palco = document.getElementById("mic_palco");
			
			guitarra_palco.width = convertPercentages(5.5,"left");
			guitarra_palco.height = convertPercentages(14.5,"top");
			guitarra_palco.style.left = convertPercentages(64,"left");
			guitarra_palco.style.top = convertPercentages(46,"top");
			
			mic_palco.width = convertPercentages(5.3,"left");
			mic_palco.height = convertPercentages(14.5,"top");
			mic_palco.style.left = convertPercentages(38,"left");
			mic_palco.style.top = convertPercentages(53,"top");
		}
		break;
		case "quarto":{
			
			currentLevel="quarto";
			
			fridge_by_blums=document.getElementById("fridge_by_blums");
			cama_quarto=document.getElementById("cama_quarto");
			lamp_quarto=document.getElementById("lamp_quarto");
			mesa_quarto=document.getElementById("mesa_quarto");
			redirect_quarto = document.getElementById("redirect_quarto");
			
			fridge_by_blums.width=convertPercentages(8.5,"left");
			fridge_by_blums.height=convertPercentages(8,"top");
			fridge_by_blums.style.left= convertPercentages(30,"left");
			fridge_by_blums.style.top = convertPercentages(46,"top");
			
			cama_quarto.width=convertPercentages(33.5,"left");
			cama_quarto.height=convertPercentages(18.25,"top");
			cama_quarto.style.left= convertPercentages(55,"left");
			cama_quarto.style.top = convertPercentages(45,"top");
			
			lamp_quarto.width=convertPercentages(2.5,"left");
			lamp_quarto.height=convertPercentages(10.5,"top");
			lamp_quarto.style.left= convertPercentages(48,"left");
			lamp_quarto.style.top = convertPercentages(44,"top");
			
			mesa_quarto.width=convertPercentages(21,"left");
			mesa_quarto.height=convertPercentages(8,"top");
			mesa_quarto.style.left= convertPercentages(67,"left");
			mesa_quarto.style.top = convertPercentages(67,"top");
			
			redirect_quarto.width=convertPercentages(8,"left");
			redirect_quarto.height=convertPercentages(2,"top");
			redirect_quarto.style.left= convertPercentages(24,"left");
			redirect_quarto.style.top = convertPercentages(71,"top");
		}
	}
	
}