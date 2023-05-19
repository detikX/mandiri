$(window).on("load", function() {
    $(".preloader").fadeOut(10000);
    $(".preloader").remove();
});

$(".answer").hide();
var action = 'click';
$(document).on(action, 'li.question', function() {
    $(this).next().slideToggle(200)
        .siblings("li.answer").slideUp();

    var img = $(this).children('i');

    $('i').not(img).removeClass('rotate').css("transition", ".2s")
    img.toggleClass('rotate')
})

$(document).ready(function() {
    AOS.init()
})

//gsap
// gsap.timeline({
//     scrollTrigger: {
//         trigger: ".box",
//         start: "center center",
//         end: "bottom top",
//         scrub: 1,
//         pin: true
//     }
// })
//     .from(".box", {
//         opacity: 0
//     })
//     .from(".text1", {
//         x: innerWidth * 1
//     })
//     .from(".text2", {
//         x: innerWidth * -1
//     })
//     .from(".text3", {
//         x: innerWidth * 1
//     })
//     .from(".logo", {
//         y: innerHeight * 1,
//         rotate: 360
//     })


// gsap.timeline({
//         scrollTrigger: {
//             trigger: ".box2",
//             start: "top top",
//             end: "bottom top",
//             scrub: 1,
//             pin: true
//         }
//     })
//     .from(".box2", {
//         opacity: 0,
//     })
//     .from(".text4", {
//         y: innerHeight * 1,
//         stagger: {
//             amount: 0.5,
//         }
//     })