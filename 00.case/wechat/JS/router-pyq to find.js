$(function () {
    $("#title-return").click(function () {

        $("#dynamic").load($(this).data("page"))
        $("#menu").load("page/menu/menu-chat.html")
        $("#title").load("page/title/title-chat.html")

    })
})