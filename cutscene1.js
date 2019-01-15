window.onload = function () {

    var vid_cutscene = document.getElementById("cutscene1")

    function video_fim_redirect() {
        if(vid_cutscene.ended === true){
            window.location.href = "palco.html";
        }
    }

    setInterval(video_fim_redirect, 10);
};