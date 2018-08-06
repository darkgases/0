$(function () {
    $("#community-content-area-button-right1").click(function () {
        $("#more-menu1").toggle()
        $("#more-menu2").toggle(false)
        $("#more-menu3").toggle(false)
    })
    $("#community-content-area-button-right2").click(function () {
        $("#more-menu2").toggle()
        $("#more-menu1").toggle(false)
        $("#more-menu3").toggle(false)
    })
    $("#community-content-area-button-right3").click(function () {
        $("#more-menu3").toggle()
        $("#more-menu2").toggle(false)
        $("#more-menu1").toggle(false)
    })
})