/* Menu */
$(document).ready(function() {
    $('.menu-trigger').click(function() {
        $('nav ul').slideToggle(800);
    });//end slide toggle

    $(window).resize(function() {
        if (  $(window).width() > 800 ) {
            $('nav ul').removeAttr('style');
        }
    });//end resize
});//end ready

/* Slider */
function theRotator() {
    // Устанавливаем прозрачность всех картинок в 0
    $('div#rotator ul li').css({opacity: 0.0});

    // Берем первую картинку и показываем ее (по пути включаем полную видимость)
    var firstImage = $('div#rotator ul li:first');
    firstImage.css({opacity: 1.0});
    firstImage.find('div').fadeIn(2000);
    rotate();

    // Вызываем функцию rotate для запуска слайдшоу, 5000 = смена картинок происходит раз в 6 секунд
    setInterval('rotate()',6000);
}

function rotate() {
    // Берем первую картинку
    var current = $('div#rotator ul li.show')?  $('div#rotator ul li.show') : $('div#rotator ul li:first');

    // Берем следующую картинку, когда дойдем до последней начинаем с начала
    var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('div#rotator ul li:first') :current.next()) : $('div#rotator ul li:first'));

    // Расскомментируйте, чтобы показвать картинки в случайном порядке
    // var sibs = current.siblings();
    // var rndNum = Math.floor(Math.random() * sibs.length );
    // var next = $( sibs[ rndNum ] );

    // Подключаем эффект растворения/затухания для показа картинок, css-класс show имеет больший z-index
    next.css({opacity: 0.0})
        .addClass('show')
        .animate({opacity: 1.0}, 1000);
    next.find('div').fadeIn(2000);

    // Прячем текущую картинку
    current.animate({opacity: 0.0}, 1000)
        .removeClass('show');
    current.find('div').hide();
}

$(document).ready(function() {
    // Запускаем слайдшоу
    theRotator();
});


/* Carousel */

$(document).on('ready', function() {
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
    });
});
