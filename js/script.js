$(function () {
    $("main h1").fadeTo(1000, 0.8, 'linear', function () {
        $("main p").fadeTo(800, 0.8, 'linear', function () {
            $("main table").fadeTo(600, 1, 'linear', function () {
                $(".social").fadeTo(600, 0.8, 'linear', function () {
                    $("footer").fadeTo(600, 1, 'linear');
                })
            });
        });
    });
});
