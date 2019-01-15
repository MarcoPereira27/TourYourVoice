window.onload = function () {



    function pararGif() {
        document.getElementById("intro_png").style.visibility = "visible";
        document.getElementById("input_input").style.display = "block";
        document.getElementById("intro").style.visibility = "hidden";
        document.getElementById("button_go").style.display = "block"
    }


    setTimeout(pararGif, 7200);

    document.getElementById("button_go").onclick = function () {
		var input_nome = document.getElementById("input_input").value;
		if(input_nome==""){
			
		}else{
		document.cookie=("name="+input_nome);
        window.location.href="intro2.html"}

    };





};