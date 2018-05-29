(function () {
    $(function () {
        $(window).on('scroll', function () {
            var $nav = $('.navbar.navbar-collapse'),
                $header = $('header');
            var scrollTop = $(window).scrollTop(),
                navOffset = $header.height() - $nav.height();
            if (scrollTop >= navOffset) {
                $('header,body>div').addClass("_active");
            } else {
                $('header,body>div').removeClass("_active");
            }
        });
    })
})()