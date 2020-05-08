$(function(){
    tabs(); // tabs 기능 실행
    popup(); // pop 기능 실행
});
function tabs(){
    $(".board_title li").click(function(){ // 클릭하면 다음을 실행해
        // 클릭한것이 .on을 가지고 있는지 그럼 무엇을 시킬건지
        if(!$(this).hasClass("on")){ // .on이 없으면
            // 즉 갤러리를 선택한 것을 의미
            $("#gallery").css("display","block");
        } else {
            $("#gallery").css("display","none");
        }
    });
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