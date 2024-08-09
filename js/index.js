$(document).ready(function(){

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






})