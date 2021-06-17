const adText = document.getElementById('marqueeText')

setInterval(function () { 
    $("#marqueeText").text('免費寄送，適用於NT$3000以上的訂單');  
}, 31000);
setInterval(function () { 
    $("#marqueeText").text('貼心提醒  |  疫情期間請大家保護自己，也保護身邊的人');  
}, 58000);

// function changeImg1() {
//     console.log('click')
//     var img1 = $("#personalityImg")
//     var ImgSrc= $("#personalityImg").attr('src')
//     console.log(ImgSrc)
//     if(ImgSrc=='Img/個人照片/融1.jpg'){
//         $(img1).attr('src','Img/個人照片/融2.jpg');
//     }
//     else{
//         $(img1).attr('src','Img/個人照片/融1.jpg');
//     }
// }
// function changeImg2() {
//     console.log('click')
//     var img2 = $("#personalityImg1")
//     var ImgSrc1= $("#personalityImg1").attr('src')
//     console.log(ImgSrc1)
//     if(ImgSrc1=='Img/個人照片/丞1_0.jpg'){
//         $(img2).attr('src','Img/個人照片/丞2.jpg');
//     }
//     else{
//         $(img2).attr('src','Img/個人照片/丞1_0.jpg');
//     }
// }
// function changeImg3() {
//     console.log('click')
//     var img3 = $("#personalityImg2")
//     var ImgSrc2= $("#personalityImg2").attr('src')
//     console.log(ImgSrc2)
//     if(ImgSrc2=='Img/個人照片/chi1_1.jpg'){
//         $(img3).attr('src','Img/個人照片/chi2.jpg');
//     }
//     else{
//         $(img3).attr('src','Img/個人照片/chi1_1.jpg');
//     }
// }
// function changeImg4() {
//     console.log('click')
//     var img4 = $("#personalityImg3")
//     var ImgSrc3= $("#personalityImg3").attr('src')
//     console.log(ImgSrc3)
//     if(ImgSrc3=='Img/個人照片/wei1_1.jpg'){
//         $(img4).attr('src','Img/個人照片/wei2.jpg');
//     }
//     else{
//         $(img4).attr('src','Img/個人照片/wei1_1.jpg');
//     }
// }