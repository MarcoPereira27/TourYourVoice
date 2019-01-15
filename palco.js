var ht;

window.onload = function(){

	document.getElementById("button_restart").onclick=function () {
		document.cookie = "health=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie = "hasSeenDialog=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie = "hasSmoked=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie = "hasSeenDialogRestaurant=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie = "hasSeenDialogMotel=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie = "hasSeenRoom=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		window.location.href = "intro.html"
	};

	document.getElementById("walk_to_mic").play();

	ht = parseInt(getCookie("health"));

	incrementHealth(ht,0);
	drawHealth(ht);

	
	fodeteBugDoCSS("palco");
	var pers = document.getElementById("personagem");
	
	
	initializeDetection();
	
	//not forget : por em %
	pers.style.top= convertPercentages(44,"top");
	pers.style.left= convertPercentages(72,"left");	

	var nome_hud = getCookie("name");
	document.getElementById("nome_personagem").innerHTML = nome_hud;
};

function palco_interactFunc(){

	//marco
	var op = document.getElementById("body_palco").style.opacity;

	function fim_jogo_xisde(){
		ht = parseInt(getCookie("health"));
		console.log(ht);
		if(ht > 65){
			document.getElementById("walk_to_mic").pause();
			document.getElementById("good_ending_audio").play();
			document.getElementById("body_palco").style.opacity = 1;
			document.getElementById("fundo_palco").style.visibility = "hidden";
			document.getElementById("hud_hud").style.display = "none";
			document.getElementById("personagem").style.visibility = "hidden";
			document.getElementById("luzes_palco").style.visibility = "hidden";
			document.getElementById("mic_palco").style.visibility = "hidden";
			document.getElementById("guitarra_palco").style.visibility = "hidden";
			document.getElementById("video_bom").style.display="block";
			document.getElementById("video_bom").play();
		} else {
			document.getElementById("walk_to_mic").pause();
			document.getElementById("bad_ending_audio").play();
			document.getElementById("body_palco").style.opacity = 1;
			document.getElementById("fundo_palco").style.visibility = "hidden";
			document.getElementById("hud_hud").style.display = "none";
			document.getElementById("personagem").style.visibility = "hidden";
			document.getElementById("luzes_palco").style.visibility = "hidden";
			document.getElementById("mic_palco").style.visibility = "hidden";
			document.getElementById("guitarra_palco").style.visibility = "hidden";
			document.getElementById("video_mau").style.display="block";
			document.getElementById("video_mau").play();
			}
		}

	op = 1;
	var timer = setInterval(function () {
		if(op <= 0.01){
			clearInterval(timer);
			//document.getElementById("body_palco").style.visibility="hidden";
		}
		document.getElementById("body_palco").style.opacity = op;
		document.getElementById("body_palco").style.filter = 'alpha(opacity=' + op * 100 + ")";
		op -= op*0.1;
	}, 50);

	setTimeout(fim_jogo_xisde,3000);

	function checkRestart() {
		if(document.getElementById("video_mau").ended === true || document.getElementById("video_bom").ended === true){
			document.getElementById("button_restart").style.display = "block";
		}
	}

	setInterval(checkRestart, 10);
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
			movement(tec.key, "palco");
		break;
	}
}