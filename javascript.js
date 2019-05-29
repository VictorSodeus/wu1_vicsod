$(function () {
    var list = document.getElementsByClassName('parallaxbg');

    for (var i = 0; i<list.length; i++) {
        var src = list[i].getAttribute('data-image-src');
        list[i].style.backgroundImage = "url('" + src + "')";
    }

    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 100
    });

});
