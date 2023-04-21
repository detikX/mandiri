$(".answer").hide();
var action = 'click';
$(document).on(action, 'li.question', function () {
    $(this).next().slideToggle(200)
        .siblings("li.answer").slideUp();

    var img = $(this).children('i');

    $('i').not(img).removeClass('rotate').css("transition", ".2s")
    img.toggleClass('rotate')
})