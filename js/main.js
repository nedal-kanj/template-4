$(document).ready(function(){
        // animate icon bar
        $('.bar-icon').on('click',function(){
            var bar1 = $(".bar-icon .bar-1")
            var bar2 = $(".bar-icon .bar-2")
            var bar3 = $(".bar-icon .bar-3")
            if($(".bar-icon").hasClass('collapsed')){
                bar3.animate({"opacity":"1"},function(){bar3.css({"transform":"translateY(-8px)",'rotate':"0deg"})})
                bar3.animate({"opacity":"1"},function(){bar3.css({"transform":"translateY(0px)"})})
                bar2.animate({"width":"30px"},function(){bar2.css({"opacity":"1"})})
                bar1.animate({"width":"30px"},function(){bar1.css({'rotate':"0deg","transform":"translateY(8px)"})})
                bar1.animate({"width":"30px"},function(){bar1.css({"transform":"translateY(0px)"})});
            }
            else{
                bar1.animate({"width":"30px"},function(){bar1.css({"transform":"translateY(8px)"})});
                bar1.animate({"width":"30px"},function(){bar1.css({'rotate':"45deg","transform":"translateY(-4px)"})})
                bar2.animate({"width":"30px"},function(){bar2.css({"opacity":"0"})})
                bar3.animate({"opacity":"1"},function(){bar3.css({"transform":"translateY(-8px)"})})
                bar3.animate({"opacity":"1"},function(){bar3.css({"transform":"translateY(4px)",'rotate':"-45deg"})})
            }
        })
        // chang background header
        $(window).on('scroll',function(){
            if($(window).scrollTop() > 10){
                $('.home .header').css({'backgroundColor': '#fff'})
            }else{
                $('.home .header').css({'backgroundColor': 'transparent'})
            }
        })
        // transtion boxs at scrolling
        $(window).on("scroll",function(){
            if($(window).scrollTop() > $('.box1').offset().top -550){
                $('.box1').css({'transform':"translateX(0%)"})
            }
            if($(window).scrollTop() > $('.box2').offset().top -550){
                $('.box2').css({'transform':"translateX(0%)"})
            }
            if($(window).scrollTop() > $('.box3').offset().top -550){
                $('.box3').css({'transform':"translateX(0%)"})
            }
            if($(window).scrollTop() > $('.box4').offset().top -550){
                $('.box4').css({'transform':"translateX(0%)"})
            }
            if($(window).scrollTop() > $('.box5').offset().top -550){
                $('.box5').css({'transform':"translateX(0%)"})
            }
        })
        // cahng color after at scroling
        $(window).on('scroll',function(){
            if($(window).scrollTop() > $('.part-3 .m1').offset().top -400){
                $(".part-3 .m1 .after").css({'backgroundColor':'#ffba00'})
            }
            else{
                $(".part-3 .m1 .after").css({'backgroundColor':'#26649f'})
            }
            // ---
            if($(window).scrollTop() > $('.part-3 .m2').offset().top -400){
                $(".part-3 .m2 .after").css({'backgroundColor':'#ffba00'})
            }
            else{
                $(".part-3 .m2 .after").css({'backgroundColor':'#26649f'})
            }
            // ---
            if($(window).scrollTop() > $('.part-3 .m3').offset().top -400){
                $(".part-3 .m3 .after").css({'backgroundColor':'#ffba00'})
            }
            else{
                $(".part-3 .m3 .after").css({'backgroundColor':'#26649f'})
            }
            // ---
            if($(window).scrollTop() > $('.part-3 .m4').offset().top -400){
                $(".part-3 .m4 .after").css({'backgroundColor':'#ffba00'})
            }
            else{
                $(".part-3 .m4 .after").css({'backgroundColor':'#26649f'})
            }
            // ---
            if($(window).scrollTop() > $('.part-3 .m5').offset().top -400){
                $(".part-3 .m5 .after").css({'backgroundColor':'#ffba00'})
            }
            else{
                $(".part-3 .m5 .after").css({'backgroundColor':'#26649f'})
            }
            // ---
            if($(window).scrollTop() > $('.part-3 .m6').offset().top -400){
                $(".part-3 .m6 .after").css({'backgroundColor':'#ffba00'})
            }
            else{
                $(".part-3 .m6 .after").css({'backgroundColor':'#26649f'})
            }
            // ---
            if($(window).scrollTop() > $('.part-3 .m7').offset().top -400){
                $(".part-3 .m7 .after").css({'backgroundColor':'#ffba00'})
            }
            else{
                $(".part-3 .m7 .after").css({'backgroundColor':'#26649f'})
            }
            // ---
            if($(window).scrollTop() > $('.part-3 .m8').offset().top -400){
                $(".part-3 .m8 .after").css({'backgroundColor':'#ffba00'})
            }
            else{
                $(".part-3 .m8 .after").css({'backgroundColor':'#26649f'})
            }
            // ---
            if($(window).scrollTop() > $('.part-3 .m9').offset().top -400){
                $(".part-3 .m9 .after").css({'backgroundColor':'#ffba00'})
            }
            else{
                $(".part-3 .m9 .after").css({'backgroundColor':'#26649f'})
            }
            // ---
            if($(window).scrollTop() > $('.part-3 .m10').offset().top -400){
                $(".part-3 .m10 .after").css({'backgroundColor':'#ffba00'})
            }
            else{
                $(".part-3 .m10 .after").css({'backgroundColor':'#26649f'})
            }
        })
})