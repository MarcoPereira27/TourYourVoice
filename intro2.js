window.onload = function () {

    document.getElementById("musica_intro").play();
    var video_intro = document.getElementById("video_intro");


    function showButtonstart() {
        document.getElementById("butao_xisde").style.visibility = "visible"
    }

    function checkVideofinish(){
        if(video_intro.ended === true){
            video_intro.style.visibility = "hidden";
            document.getElementById("comandos").style.visibility = "visible";
            setTimeout(showButtonstart, 2000)
        }
    }

    setInterval(checkVideofinish, 10);

    document.getElementById("butao_xisde").onclick = function () {
        window.location.href="index.html"
    }




};
