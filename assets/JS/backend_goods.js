var goodsName =document.getElementsByClassName('goodsName')
var goodsImgName1=document.getElementsByClassName('goodsImgName1')
var goodsImgName2=document.getElementsByClassName('goodsImgName2')
var goodsColor=document.getElementsByClassName('goodsColor')
var goodsPrice=document.getElementsByClassName('goodsPrice')
var goodsStock=document.getElementsByClassName('goodsStock')
var goodsFormRow =document.getElementsByClassName('goodsFormRow')
$(document).ready(function(){
    $('.goodsName').attr('disabled','true')
    $('.goodsImgName1').attr('disabled','true')
    $('.goodsImgName2').attr('disabled','true')
    $('.goodsColor').attr('disabled','true')
    $('.goodsPrice').attr('disabled','true')
    $('.goodsStock').attr('disabled','true')
    $('.orderPhone').attr('disabled','true')
    $('.goTopBox').hide(); 
});
function initBtn(){
   
    var initgoodsFormRow = `<div id="goodsFormRowBox" class="goodsFormRow">
    <p id="goodsId">1.</p>
    <input class="goodsName" type="text" style="margin-right: 4%;" value="Nike Air  Force 1'07 LV8" disabled>
    <input class="goodsImgName1" type="text" style="width: 10%;margin-right: 1%;" value="Img/NP SHOP (4).png" disabled>
    <input class="goodsImgName2" type="text" value="Img/NP SHOP (4).png" style="width: 10%;margin-right: 3%;" disabled>
    <input class="goodsColor" type="text" value="白色" style="margin-right: 0.5%;" disabled>
    <input class="goodsPrice" type="text" value="5,800" style="margin-right: 0.5%;" disabled>
    <input class="goodsStock" type="text" value="25" style="margin-right: 3%;" disabled>
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
</div> `
    $('#goodsFormBox').append(initgoodsFormRow);        // 追加新元素
}
function deleteBtn(){
    var goodsFormRow = document.getElementById('goodsFormRowBox')
    goodsFormRow.remove(); 
}
function changeBtn() {
//    goodsName=  $('.goodsName')
//    goodsImgName1= $('.goodsImgName1')
//    goodsImgName2= $('.goodsImgName2')
//    goodsColor= $('.goodsColor')
//    goodsPrice= $('.goodsPrice')
   console.log(goodsName)
   for(i=0;i<=goodsName.length;i++){
    console.log(goodsName[i].disabled)
    console.log(goodsImgName1[i].disabled)
        if(goodsName[i].disabled){
            goodsName[i].disabled=false
        }
        else{
            goodsName[i].disabled=true
        }
        if(goodsImgName1[i].disabled){
            goodsImgName1[i].disabled=false
        }
        else{
            goodsImgName1[i].disabled=true
        }
        if(goodsImgName2[i].disabled){
            goodsImgName2[i].disabled=false
        }
        else{
            goodsImgName2[i].disabled=true
        }
        if(goodsColor[i].disabled){
            goodsColor[i].disabled=false
        }
        else{
            goodsColor[i].disabled=true
        }
        if(goodsPrice[i].disabled){
            goodsPrice[i].disabled=false
        }
        else{
            goodsPrice[i].disabled=true
        }
        if(goodsStock[i].disabled){
            goodsStock[i].disabled=false
        }
        else{
            goodsStock[i].disabled=true
        }
    }
}


$(document).ready(function(){
    $("#goTopBox").hide(); 
    var a,b,c;
    a = $(window).height(); //瀏覽器窗口高度
    console.log(a)
    var group = $("#goodsFormRowBox");
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