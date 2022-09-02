$('.change-stylist__button').click(function() {
    $('.select__stylist').removeClass('hide_el');
    $('.book__later').hide();
});
$('.change-location__button').click(function() {
    $('.change__location').removeClass('hide_el');
});

$('.close__modal').click(function() {
    $(this).closest('.modal__wrapper').addClass('hide_el');
    $('.book__later').show();
})

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

$('.modal__wrapper .step-back__stylist').click(function() {
    $(this).closest('.modal__wrapper').addClass('hide_el');
    $('.select__stylist').removeClass('hide_el')
})

//open promo code
let clickCount = 1;
$('.promo-code__title').click(function() {
    clickCount++;
    $('.promo__expand').slideDown(200);

    if (clickCount % 2) {
        setTimeout(function() {
            $('#shopCartOne').slideUp(200);
        }, 100)
    }
})
