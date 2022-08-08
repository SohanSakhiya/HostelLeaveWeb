// console.log("hey")


// $(window).scroll(function(){
//     $(".container").css("opacity",1 - $(window).scrollTop())
// });
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

$("#click").click(function() {
    $('html, body').animate({
        scrollTop: $("#mid1").offset().top
    }, 1500);
});

$(".mid-1").click(function() {
    $('html, body').animate({
        scrollTop: $("#mid2").offset().top
    }, 1500);
});

$(".mid-2").click(function() {
    $('html, body').animate({
        scrollTop: $("#mid2").offset().top
    }, 1500);
});


$(".mid-1").click(function() {
    $(".sh-lv").html("- SHORT LEAVE - UG")
    $(".lg-lv").html("- LONG LEAVE - UG")
});

$(".mid-2").click(function() {

    // $(".container2").css({"font-size":"15 px"});

    $(".sh-lv").html("- LONG LEAVE - High Rise")
    $(".lg-lv").html("- LONG LEAVE - High Rise")
});