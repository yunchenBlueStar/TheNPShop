const adText = document.getElementById('marqueeText')

setInterval(function () { 
    $("#marqueeText").text('免費寄送，適用於NT$3000以上的訂單');  
}, 31000);
setInterval(function () { 
    $("#marqueeText").text('貼心提醒  |  疫情期間請大家保護自己，也保護身邊的人');  
}, 58000);

$(document).ready(function(){
    $("#goTopBox").hide(); 
    var a,b,c;
    a = $(window).height(); //瀏覽器窗口高度
    console.log(a)
    var group = $("#marqueeBox");
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