$('.change-stylist__button').click(function() {
    $('.select__stylist').removeClass('hide_el');
    $('body').css('overflow', 'hidden');
});
$('.change-location__button').click(function() {
    $('.change__location').removeClass('hide_el');
    $('body').css('overflow', 'hidden');
});

$('.close__modal').click(function() {
    $(this).closest('.modal__wrapper').addClass('hide_el');
    $('body').css('overflow', 'visible');
})

$('.step__back').click(function() {
    $('body').css('overflow', 'visible');
})

//remove when modal buttons are working start

let specificStylistBtn = $('.select__stylist form button');
let specificDateBtn = $('.select__day form button');
let specificTimeBtn = $('.select__time form button');

specificStylistBtn.closest('form').on('submit', function(e) {
    e.preventDefault();
    $('.select__stylist').addClass('hide_el');
    $('.select__day').removeClass('hide_el');
})

specificDateBtn.closest('form').on('submit', function(e) {
    e.preventDefault();
    $('.select__day').addClass('hide_el');
    $('.select__time').removeClass('hide_el');
})

specificTimeBtn.closest('form').on('submit', function(e) {
    e.preventDefault();
    $('.select__time').addClass('hide_el');
})

//remove when modal buttons are working end

$('.modal__wrapper .step-back__stylist').click(function() {
    $(this).closest('.modal__wrapper').addClass('hide_el');
    $('.select__stylist').removeClass('hide_el')
})

$('.modal__wrapper .step__back').click(function() {
        $(this).closest('.modal__wrapper').addClass('hide_el');
    })
    //open promo box
let clickCount = 1;
$('.promo-code__title').click(function() {
    clickCount++;
    $('.promo__expand').slideDown(200);

    if (clickCount % 2) {
        setTimeout(function() {
            $('#shopCartOne').slideUp(200);
        }, 100)
    }
});

$('.extra-services__wrapper').click(function() {
    clickCount++;

    $(this).find('.appointment-details-service__single').slideDown(150);
    $(this).find('.fa-chevron-down').css('transform', 'rotate(180deg)');

    if (clickCount % 2) {
        setTimeout(function() {
            $('.extra-services__wrapper').find('.appointment-details-service__single').slideUp(150);
            $('.extra-services__wrapper').find('.fa-chevron-down').css('transform', 'rotate(0deg)');
        }, 100)
    }
});

$('.search-bar__content input').on('keypress', function() {

    if ($(this).val() == '') {
        $('.locations__results').slideUp(250);
    } else {
        $('.locations__results').slideDown(250);
    }



});
