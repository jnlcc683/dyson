$(document).ready(function(){
    // 11페이지 탭메뉴
    $(".tab_menu11>dt").click(function(){
        $(".tab_menu11>dt").removeClass("on")
        $(this).addClass("on")
    })

    //1페이지 스크롤내릴때 영상줄어드는거
    let scrTop = 0
    $(window).scroll(function(){
        scrTop = $(window).scrollTop()
        console.log(scrTop)
        if(scrTop>=0 && scrTop<=500){
            let per = scrTop/500 // 0~1
            let per2 = per*0.2 // 0~0.2
            let per3 = per*100
            $(".video_box").css("transform",`scale(${1-per2})`)
            $(".video_box").css("border-radius",per3+`px`)
        }
    })


    //8페이지 큰 탭메뉴
    $(".tab_menu>dt").click(function(){
        $(".tab_menu>dt").removeClass("onn")
        $(this).addClass("onn")
    })

    //8페이지 멀티제품 img group(colors) 탭메뉴
    $(".colors_tab_menu>dt").click(function(){
        $(".colors_tab_menu>dt").removeClass("on")
        $(this).addClass("on")
    })

    //8페이지 드라이어 img group 탭메뉴
    $(".colors1_tab_menu>dt").click(function(){
        $(".colors1_tab_menu>dt").removeClass("onn")
        $(this).addClass("onn")
    })

    //8페이지 에어스트레이트 스트레이트너 img group 탭메뉴
    $(".colors2_tab_menu>dt").click(function(){
        $(".colors2_tab_menu>dt").removeClass("on2")
        $(this).addClass("on2")
    })

    //8페이지 코랄 스타일 스트레이트너 img group 탭메뉴
    $(".colors4_tab_menu>dt").click(function(){
        $(".colors4_tab_menu>dt").removeClass("on4")
        $(this).addClass("on4")
    })
    

        //팝업 열기
        $(".btn_open").click(function(){
            $(".demo_store").addClass("on")
        })
        //팝업 닫기
        $(".btn_close").click(function(){
            $(".demo_store").removeClass("on")
        })
})