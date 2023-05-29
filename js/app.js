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

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const obj = document.getElementById("value");
animateValue(obj, 1500, 2023, 2000);

$(".category-airline").click(function() {
    var id = $(this).attr("id");
    var toShow = "#show-" + id;
    // console.log(toShow);
    $(".airline-content").not(toShow).hide();
    $(toShow).fadeIn('fast');
    $(".twox").show();
    AOS.refresh();
    if ($(".detail-refund").children().hasClass("open")) {
        $(toShow).removeClass("open").addClass("close-info").slideDown(function() {
            $('html, body').animate({
                scrollTop: $(".refund").offset().top + 20
            });
        });
        // console.log("harus fade")
    }

    if ($(".detail-refund").children().hasClass("close-info")) {
        setTimeout(() => {
                $(toShow)
                    .removeClass("close-info")
                    .addClass("open")
                    .slideDown(function() {
                        $("html, body").animate({
                            scrollTop: $(".refund").offset().top + 20,
                        });
                    });

            }, 500)
            // console.log("harus slide");
    }

    $('.detail-refund ul li.category-detail').removeClass("activeMenu");
    $('.detail-refund ul li.category-detail:first-child').addClass("activeMenu");
    // $('.wrapper-box').css("display","block");
    $('.wrapper-box').css("display", "none");
    $(toShow).children('.wrapper-box').first().css("display", "block")
});

$(".closer").click(() => {
    $(".airline-content").removeClass("open").addClass("close-info");
    $(".twox").fadeOut();
    $(".airline-name").removeClass("bg-category");
    $(".airline-content") /*.fadeOut()*/
        .fadeOut();
    $("html, body").animate({
        scrollTop: $(".contentx").offset().top + 20,
    })
});

$(".category-click .airline-name").click(function() {
    $(".category-click .airline-name").removeClass("bg-category");
    $(this).addClass("bg-category");
});