$(function () {
    $("#menu-block1").click(function () {
        $("#D1").toggle()
        $("#D2").toggle(false)
        $("#D3").toggle(false)
        $("#D4").toggle(false)

    })
    $("#menu-block2").click(function () {
        $("#D2").toggle()
        $("#D1").toggle(false)
        $("#D3").toggle(false)
        $("#D4").toggle(false)
    })
    $("#menu-block4").click(function () {
        $("#D4").toggle()
        $("#D2").toggle(false)
        $("#D1").toggle(false)
        $("#D3").toggle(false)
    })

    $("#menu-block3").click(function () {
        $("#D3").toggle()
        $("#D2").toggle(false)
        $("#D1").toggle(false)
        $("#D4").toggle(false)
    })

    $(".dynamic-line-head").click(function () {
        $("#D5").toggle()
        $("#D5-1").toggle(false)
        $("#D3").toggle(false)
        $("#D5-2").toggle(false)

    })
    $("#title-wei1").click(function () {
        $("#D5").toggle(false)
        $("#D5-1").toggle()
        $("#D5-2").toggle()
        $("#D3").toggle()

    })

})