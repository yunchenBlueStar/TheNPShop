$(document).ready(function(){
    $("#goTopBox").hide(); 
    var a,b,c;
    a = $(window).height(); //瀏覽器窗口高度
    console.log(a)
    var group = $("#likeListBox");
    $(window).scroll(function(){
    b = $(this).scrollTop(); //頁面滾動的高度
    c = group.offset().top; //元素距離文檔（document）頂部的高度
    if(a-c>=b){
        console.log('nice')        
        $("#goTopBox").fadeOut(300);
    }
    else{
        console.log('no')
        $("#goTopBox").fadeIn(300);
    }
    });
});