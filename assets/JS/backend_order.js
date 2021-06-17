var orderMemberName =document.getElementsByClassName('orderMemberName')
var orderGoodsName=document.getElementsByClassName('orderGoodsName')
var orderSize=document.getElementsByClassName('orderSize')
var orderCounts=document.getElementsByClassName('orderCounts')
var orderPC=document.getElementsByClassName('orderPC')
var orderAddress=document.getElementsByClassName('orderAddress')
var orderPhone =document.getElementsByClassName('orderPhone')
var orderFormRow =document.getElementsByClassName('orderFormRow')
var orderMemberMail =document.getElementsByClassName('orderMemberMail')
var orderPayway=document.getElementsByClassName('orderPayway')
$(document).ready(function(){
    $('.orderMemberName').attr('disabled','true')
    $('.orderGoodsName').attr('disabled','true')
    $('.orderSize').attr('disabled','true')
    $('.orderCounts').attr('disabled','true')
    $('.orderPC').attr('disabled','true')
    $('.orderAddress').attr('disabled','true')
    $('.orderPhone').attr('disabled','true')
    $('.orderMemberMail').attr('disabled','true')
    $('.orderPayway').attr('disabled','true')
    $('.goTopBox').hide(); 
});
function initBtn(){
   
    var initorderFormRow = `<div id="orderFormRowBox" class="orderFormRow">
    <p id="orderId">1.</p>
    <input class="orderMemberName" type="text" style="margin-right: 1%;" value="王小名" disabled>
    <input class="orderGoodsName" type="text" style="width: 8%;margin-right: 2.5%;" value="Nike Air  Force 1'07 LV8" disabled>
    <input class="orderSize" type="text" value="25" style="width:5%;margin-right: 2%;" disabled>
    <input class="orderCounts" type="text" value="23" style="width:5%;margin-right: 1%;" disabled>
    <input class="orderPC" type="text" value="320" style="margin-right: 1%;" disabled>
    <input class="orderAddress" type="text" value="桃園市中壢區新中北路449號" style="width:7%;margin-right: 0.5%;" disabled>
    <input class="orderPhone" type="text" value="0905798412" style="width:7%;margin-right: 0.5%;" disabled>
    <input class="orderMemberMail" type="text" value="h1253567@gmail.com" style="margin-right: 1.5%;" disabled>
    <input class="orderPayway" type="text" value="SBP" style="margin-right: 3%;" disabled>
    <button type="button" style="    margin-right: 3%;
    border: 1px solid lightgray;
    padding: 10px;
    font-size: 17px;
    outline: none;
    width: 5%;" onclick="deleteBtn()">刪除</button>
    <button type="button" style="
    border: 1px solid lightgray;
    padding: 10px;
    font-size: 17px;
    outline: none;
    width: 5%;" onclick="changeBtn()">修改</button>
</div>`
    $('#orderFormBox').append(initorderFormRow);        // 追加新元素
}
function deleteBtn(){
    var orderFormRow = document.getElementById('orderFormRowBox')
    orderFormRow.remove(); 
}
function changeBtn() {
//    orderMemberName=  $('.orderMemberName')
//    orderGoodsName= $('.orderGoodsName')
//    orderSize= $('.orderSize')
//    orderCounts= $('.orderCounts')
//    orderPC= $('.orderPC')
   console.log(orderMemberName)
   for(i=0;i<=orderMemberName.length;i++){
    console.log(orderMemberName[i].disabled)
    console.log(orderGoodsName[i].disabled)
        if(orderMemberName[i].disabled){
            orderMemberName[i].disabled=false
        }
        else{
            orderMemberName[i].disabled=true
        }
        if(orderGoodsName[i].disabled){
            orderGoodsName[i].disabled=false
        }
        else{
            orderGoodsName[i].disabled=true
        }
        if(orderSize[i].disabled){
            orderSize[i].disabled=false
        }
        else{
            orderSize[i].disabled=true
        }
        if(orderCounts[i].disabled){
            orderCounts[i].disabled=false
        }
        else{
            orderCounts[i].disabled=true
        }
        if(orderPC[i].disabled){
            orderPC[i].disabled=false
        }
        else{
            orderPC[i].disabled=true
        }
        if(orderAddress[i].disabled){
            orderAddress[i].disabled=false
        }
        else{
            orderAddress[i].disabled=true
        }
        if(orderPhone[i].disabled){
            orderPhone[i].disabled=false
        }
        else{
            orderPhone[i].disabled=true
        }
        if(orderMemberMail[i].disabled){
            orderMemberMail[i].disabled=false
        }
        else{
            orderMemberMail[i].disabled=true
        }
        if(orderPayway[i].disabled){
            orderPayway[i].disabled=false
        }
        else{
            orderPayway[i].disabled=true
        }
    }
}


$(document).ready(function(){
    $("#goTopBox").hide(); 
    var a,b,c;
    a = $(window).height(); //瀏覽器窗口高度
    console.log(a)
    var group = $("#orderFormRowBox");
     c = group.offset().top; //元素距離文檔（document）頂部的高度
    // alert(c);
    $(window).scroll(function(){
    b = $(this).scrollTop(); //頁面滾動的高度
    
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