$(".text-section").each(function() {
    var $this = $(this);
    if ($this.attr("class").includes("active")) {
        var findsrc = $this.find("img").attr("data-src");
        $this.find("img").attr("src", findsrc);
    }

    setTimeout(function() {
        if ($this.find("img").attr("src") == "#") {
            var findsrc = $this.find("img").attr("data-src");
            $this.find("img").attr("src", findsrc);
        }
    }, 1500);

})
// setTimeout(function() {
//
//     var gethelmetposition = ($(".scrolltrigger").offset().top);
//     var getendposition = $(".scrollend").offset().top;
//
//     console.log(gethelmetposition, getendposition)
//

//
//     $(window).scroll(function() {
//         var $hscroll = $(".helmets-scroll");
//         if (gethelmetposition >= $(window).scrollTop() && getendposition >= $(window).scrollTop()) {
//             $hscroll.removeClass("in-view");
//             $(".text-scroll").removeClass("in-view-text");
//         }
//
//         // if (getendposition < $(window).scrollTop() + $(window).height()) {
//         //     $hscroll.removeClass("in-view");
//         //     $(".text-scroll").removeClass("in-view-text");
//         // }
//
//         if (gethelmetposition <= $(window).scrollTop() && getendposition > $(window).scrollTop() + $(window).height()) {
//             $hscroll.addClass("in-view");
//             $(".text-scroll").addClass("in-view-text");
//         }
//     })
//
//     $(".skip").click(function() {
//         $(".text-scroll").removeClass("in-view-text");
//         $("html, body").animate({
//             scrollTop: getendposition - $(".header").height()
//         }, 300);
//
//     })
//
//     $(".text-scroll").scroll(function() {
//         $(".text-section").each(function() {
//             var elementtop = $(this).offset().top + $(window).height() / 2;
//             var elementbottom = $(this).offset().top + $(".helmets-scroll").height() - $(window).height() / 2;
//             var divtop = $('.helmets-scroll').offset().top;
//             var divbottom = $('.helmets-scroll').offset().top + $(window).height();
//
//             if (elementtop - divbottom <= 0 && elementbottom - divtop > 0) {
//                 var getindex = $(this).index();
//                 $(".scroll-img").removeClass("fadeIn");
//                 $(".scroll-img").eq(getindex).addClass("fadeIn");
//             }
//             if ($(".text-scroll").scrollTop()+ $(".text-scroll").height() >= $(".text-scroll").prop('scrollHeight')) {
//                 $(".helmets-scroll").removeClass("in-view");
//                 $(".text-scroll").removeClass("in-view-text");
//             }
//             // console.log($top)
//
//             // if($top < $(window).scrollTop() && $bottom > $(window).scrollTop()) {
//             //     console.log($(this).index())
//             // }
//         })
//     })
//
//     $(window).resize(function() {
//         gethelmetposition = $(".scrolltrigger").offset().top;
//         getendposition = $(".scrollend").offset().top;
//
//     })
//     }, 1500);

var loadgraphicImage = function(frame) {
    var img = frame.find("img");
    if (img.attr("src") == "#") {
        var datasrc = img.attr("data-src");
        img.attr("src", datasrc);
        attr = datasrc;
    }
    return img;
};

var advance = function(graphic, direction) {
    graphic.find(".noNext").removeClass("noNext");
    var current = graphic.find(".active");
    var images = $(".text-section", graphic);
    var index = images.index(current);
    var direction;
    if (direction == "right") {
        var next = $(images[index + 1]);
        var afterNext = $(images[index + 2]);
    } else {
        var next = $(images[index - 1]);
        var afterNext = $(images[index - 2]);
    }

    if (images.index(afterNext) < 0) {
        var getDirection;
        if (direction == "right") {
            getDirection = "next";
        } else {
            getDirection = "prev";
        }

        var getClass = "." + getDirection;
        graphic.find(getClass).addClass("noNext");
    } else {
        graphic.find(".noNext").removeClass("noNext");
    }
    if (images.index(next) < 0) return;

    var image = loadgraphicImage(next);


    if (afterNext) loadgraphicImage(afterNext);

    next.addClass("active");
    current.removeClass("active");

    next.removeClass("post-active animate fade");
    current.addClass("post-active animate");
    current.addClass("fade");
    next.addClass("animate");
}
$(".helmets-scroll").each(function() {
    $this = $(this);
    $this.find(".arr").on("click", function() {
        var direction = $(this).attr("class");
        advance($this, direction.includes("next") ? "right" : "left");
    })
})
