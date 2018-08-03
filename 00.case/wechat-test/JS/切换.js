$(function () {
    $("#menu-block1").click(function () {
        $("#D1").toggle()
        $("#D2").toggle(false)
    })
    $("#menu-block2").click(function () {
        $("#D2").toggle()
        $("#D1").toggle(false)
    })

})