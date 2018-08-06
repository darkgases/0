$(function () {
    $(".menu-block").click(function () {

        $("#dynamic").load($(this).data("page"))

    })

})