var memberName =document.getElementsByClassName('memberName')
var memberMail=document.getElementsByClassName('memberMail')
var memberPassword=document.getElementsByClassName('memberPassword')
var memberGender=document.getElementsByClassName('memberGender')
var memberBirth=document.getElementsByClassName('memberBirth')
var memberFormRow =document.getElementsByClassName('memberFormRow')
$(document).ready(function(){
    $('.memberName').attr('disabled','true')
    $('.memberMail').attr('disabled','true')
    $('.memberPassword').attr('disabled','true')
    $('.memberGender').attr('disabled','true')
    $('.memberBirth').attr('disabled','true')
    $('.goTopBox').hide(); 
});
function initBtn(){
   
    var initmemberFormRow = `<div id="memberFormRowBox">
    <p id="memberId">1.</p>
    <input class="memberName" type="text" style="margin-right: 4.5%;" value="王小名"  disabled>
    <input class="memberMail" type="email" style="width: 15%;margin-right: 5.5%;" value="132127@gmail.com" disabled>
    <input class="memberPassword" type="password" value="123131233" style="margin-right: 6%;" disabled>
    <input class="memberGender" type="text" value="男" style="margin-right: 4%;" disabled>
    <input class="memberBirth" type="text" value="2001/07/23" style="margin-right: 3%;"disabled>
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
    $('#memberFormBox').append(initmemberFormRow);        // 追加新元素
}
function deleteBtn(){
    var memberFormRow = document.getElementById('memberFormRowBox')
    console.log($(memberFormRow))
    memberFormRow.remove(); 
}
function changeBtn() {
//    memberName=  $('.memberName')
//    memberMail= $('.memberMail')
//    memberPassword= $('.memberPassword')
//    memberGender= $('.memberGender')
//    memberBirth= $('.memberBirth')
   console.log(memberName)
   for(i=0;i<=memberName.length;i++){
    console.log(memberName[i].disabled)
    console.log(memberMail[i].disabled)
        if(memberName[i].disabled){
            memberName[i].disabled=false
        }
        else{
            memberName[i].disabled=true
        }
        if(memberMail[i].disabled){
            memberMail[i].disabled=false
        }
        else{
            memberMail[i].disabled=true
        }
        if(memberPassword[i].disabled){
            memberPassword[i].disabled=false
        }
        else{
            memberPassword[i].disabled=true
        }
        if(memberGender[i].disabled){
            memberGender[i].disabled=false
        }
        else{
            memberGender[i].disabled=true
        }
        if(memberBirth[i].disabled){
            memberBirth[i].disabled=false
        }
        else{
            memberBirth[i].disabled=true
        }
    }
}


$(document).ready(function(){
    $("#goTopBox").hide(); 
    var a,b,c;
    a = $(window).height(); //瀏覽器窗口高度
    console.log(a)
    var group = $("#memberFormRowBox");
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