var aktuelleZeit;

$(document).ready(function(){

    $(document).keypress(function(e) {
        if(e.which == 49) {
            aktuelleZeit = $("video#videoAktuell").currentTime;
            $("video").removeClass("videoAktuell");
            $("video#video1").addClass("videoAktuell");

            $("video.videoAktuell").currentTime = aktuelleZeit;
            // $('audio').each(function(){
            //     this.currentTime = aktuelleZeit;
            // });
        }
        if(e.which == 50) {
            aktuelleZeit = $("video#videoAktuell").currentTime;
            $("video").removeClass("videoAktuell");
            $("video#video2").addClass("videoAktuell");

            $("video.videoAktuell").currentTime = aktuelleZeit;
            // $('audio').each(function(){
            //     this.currentTime = aktuelleZeit;
            // });
        }
        if(e.which == 51) {
            aktuelleZeit = $("video#videoAktuell").currentTime;
            $("video").removeClass("videoAktuell");
            $("video#video3").addClass("videoAktuell");

            $("video.videoAktuell").currentTime = aktuelleZeit;
            // $('audio').each(function(){
            //     this.currentTime = aktuelleZeit;
            // });
        }
        if(e.which == 52) {
            aktuelleZeit = $("video#videoAktuell").currentTime;
            $("video").removeClass("videoAktuell");
            $("video#video4").addClass("videoAktuell");

            $("video.videoAktuell").currentTime = aktuelleZeit;
            // $('audio').each(function(){
            //     this.currentTime = aktuelleZeit;
            // });
        }
        if(e.which == 53) {
            aktuelleZeit = $("video#videoAktuell").currentTime;
            $("video").removeClass("videoAktuell");
            $("video#video5").addClass("videoAktuell");

            $("video.videoAktuell").currentTime = aktuelleZeit;
            // $('audio').each(function(){
            //     this.currentTime = aktuelleZeit;
            // });
        }
    });


    //NEUSTART-BUTTON
    $( "#neustart" ).click(function(){
        $('audio').each(function(){
            this.currentTime = 0;
            this.play();
        });
        $("video").each(function () {
            this.currentTime = 0;
            this.play();
        });
    });

    //PLAY-BUTTON
    $( "#play" ).click(function(){
        $('audio').each(function(){
            this.play();
        });
        $("video").each(function () {
            this.play();
        });
    });

    //PAUSE-BUTTON
    $( "#pause" ).click(function(){
        $('audio').each(function(){
            this.pause();
        });

        $("video").each(function () {
            this.pause();
        });
    });

});
