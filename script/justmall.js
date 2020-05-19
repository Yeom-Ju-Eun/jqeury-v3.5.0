$(function(){
    tabs(); // tabs 기능 실행
    popup(); // pop 기능 실행
    gnb(); // gnb 기능 호출
});
function gnb(){
    // 메인메뉴 마우스 오버시 서브메뉴 펼치기
    // 마우스 오버한 메인메뉴는 하이라이트 적용
    $("#gnb > li").hover(
        function(){
            $(this).addClass("on"); // .on을 추가해
            $(".lnb").show("slow"); // 400, 500, ... slow, fast
        },
        function(){
            $(this).removeClass("on");
            $(".lnb").hide("fast");
        }
    );
    // $("#gnb >li").on({
    //     mouseover:function(){

    //     },
    //     mouseout:function(){

    //     }
    // })
    // $("#gnb > li").mouseover(function(){
    //     $(this).addClass("on"); // .on을 적용해
    //     $(".lnb").show();
    // });
    // $("#gnb > li").mouseout(function(){
    //     $(this).removeClass("on"); // .on을 지워줘
    //     $(".lnb").hide();
    // })
}
function tabs(){
    $(".board_title li").click(function(){
        //console.log("클릭한 LI : "+$(this).index());
        if(!$(this).hasClass("on")) {
            $(this).siblings().removeClass("on");
            $(this).addClass("on");
            $("#gallery").toggleClass("hide");
        }
    });
}
function notice_on(){
    
}
function gallery_on(){
   
}
function popup(){
    popup_open();
    popup_close();
}
function popup_open(){
    $("#notice li:eq(0)").click(function(){ // 팝업창 열기기능
        $("#popup").css("display","block");
    });
}
function popup_close(){
    $("#popup input[type=button]").click(function(){
        $(this).parent().css("display","none"); // 부모를 감추면 자식도 없어진다
    })
}
    // 공지사항 누르면 공지사항보이기 (갤러리 감춰)
    
    //갤러리 누르면 갤러리 보여줘(공지사항은 감춰)

    //공지사항 첫번재 게시물 클릭하면 팝업창 띄워
    // 1. var tg = $("#notice li");
    // console.log("li의 갯수 : "+tg.length);
    // tg.click(function(){
    //     var LI = $(this); // 클릭한 요소를 LI라는 변수에 담아라
    //     console.log(LI.index()); // LI가 몇번째 인덱스인지 추력해라
    //     if(LI.index()==0) { // .index() : 해당 요소의 인덱스 번호를 알려주는 메서드
    //         $("#popup").css("display","block");
    //     }
    // })
    // 2. $("#notice li").first().click(function(){
    //     $("#popup").css("display","block");
    // })
    // 3.