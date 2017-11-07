$(document).ready(function() {
    var gethelmetposition = $(".scrolltrigger").offset().top;
    var getendposition = $(".scrollend").offset().top;


    $(".scroll-img").each(function() {
        var $this = $(this);
        if ($this.attr("class").includes("firstimg")) {
            var findsrc = $this.find("img").attr("data-src");
            $this.find("img").attr("src", findsrc);
            $this.addClass("fadeIn");
        }

        setTimeout(function() {
            if ($this.find("img").attr("src") == "#") {
                var findsrc = $this.find("img").attr("data-src");
                $this.find("img").attr("src", findsrc);
            }
        }, 1500);

    })

    $(window).scroll(function() {
        var $hscroll = $(".helmets-scroll");

        if (gethelmetposition >= $(window).scrollTop() && getendposition >= $(window).scrollTop()) {
            $hscroll.removeClass("in-view");
            $(".text-scroll").removeClass("in-view-text");
        }

        if (gethelmetposition <= $(window).scrollTop()) {
            $hscroll.addClass("in-view");
            $(".text-scroll").addClass("in-view-text");
        }

        if (getendposition < $(window).scrollTop() + $(window).height()) {
            $hscroll.removeClass("in-view");
            $(".text-scroll").removeClass("in-view-text");
        }
    })

    $(".text-scroll").scroll(function() {
        $(".text-section").each(function() {
            var elementtop = $(this).offset().top + $(window).height() / 2;
            var elementbottom = $(this).offset().top + $(".helmets-scroll").height() - $(window).height() / 2;
            var divtop = $('.helmets-scroll').offset().top;
            var divbottom = $('.helmets-scroll').offset().top + $(window).height();

            if (elementtop - divbottom <= 0 && elementbottom - divtop > 0) {
                var getindex = $(this).index();
                $(".scroll-img").removeClass("fadeIn");
                $(".scroll-img").eq(getindex).addClass("fadeIn");

            }

            // console.log($top)

            // if($top < $(window).scrollTop() && $bottom > $(window).scrollTop()) {
            //     console.log($(this).index())
            // }

        })
    })

    $(window).resize(function(){
        gethelmetposition = $(".scrolltrigger").offset().top;
        getendposition = $(".scrollend").offset().top;

    })

});
