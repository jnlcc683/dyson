$(document).ready(function(){
    // 4페이지 탭메뉴 큰 틀
    $(".tab_menu>dt").click(function(){
        $(".tab_menu>dt").removeClass("on")
        $(this).addClass("on")
    })

    // 4페이지 진공+물청소기 탭메뉴
    $(".tab_menu2>dt").click(function(){
        $(".tab_menu2>dt").removeClass("on")
        $(this).addClass("on")
    })

    // 4페이지 진공청소기 탭메뉴
    $(".tab_menu3>dt").click(function(){
        $(".tab_menu3>dt").removeClass("on")
        $(this).addClass("on")
    })

    // 5페이지 탭메뉴
    $(".tab_menu5>dt").click(function(){
        $(".tab_menu5>dt").removeClass("on")
        $(this).addClass("on")
    })



})