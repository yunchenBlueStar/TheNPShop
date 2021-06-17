function likebtn(){
    var likebtns = $('i')
    for (var i = 0; i < likebtns.length; i++) {  
        likebtns[i].onclick = function() {
            if($(this).attr('id')!='goTopBtn'){
                if ($(this).css('color') == "rgb(0, 0, 0)"){
                    console.log($(this).attr('id'))
                    this.style.color = 'rgb(25, 137, 250)';
                }
                else{
                    this.style.color = 'black';
                }   
            }
            else{
                console.log('this is goTopBtn!')
            }
        }
    }

}

$(document).ready(function(){
    $("#goTopBox").hide(); 
    var a,b,c;
    a = $(window).height(); //瀏覽器窗口高度
    console.log(a)
    var group = $("#goodsListBox");
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
