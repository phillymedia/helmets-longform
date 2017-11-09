$(document).ready(function() {
    $(".scroll-img").each(function() {
        var $this = $(this);
        if ($this.attr("class").includes("firstimg")) {
          $(this).addClass("inview");
            var findsrc = $this.find("img").attr("data-src");
            $this.find("img").attr("src", findsrc);
        }




        // setTimeout(function() {
        //     if ($this.find("img").attr("src") == "#") {
        //         var findsrc = $this.find("img").attr("data-src");
        //         $this.find("img").attr("src", findsrc);
        //     }
        // }, 1500);

    })
    $(window).scroll(function(){
      if($(".helmets-scroll2").offset().top <= $(window).scrollTop() ) {
        $('.image-scroll').addClass('fixedimg');
      }
      if($(".helmets-scroll2").offset().top > $(window).scrollTop() ) {
        $('.image-scroll').removeClass('fixedimg');
      }
      if($(".helmets-scroll2").offset().top + $(".helmets-scroll2").height() <= $(window).scrollTop() + $(window).height() ) {
        console.log("end")
          $('.image-scroll').removeClass('fixedimg').css("bottom","0");
      }
    })
});
