var ImgsContainer = document.querySelector("#imgs-container");
var imgtag = document.querySelector('img');

console.log(imgtag);
console.log(imgtag.src);
console.log(ImgsContainer);
// console.log(imgtag.currentSrc);

var ImgsUrl =[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3fTonNAxovtprsexDHEdS2-znhWaewwm6w&s",
    "https://english.news.cn/20250408/99961d4c7fdf4edebb0c357196ced5ad/uPQOUm67nWPUS1UP.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJdtLvBTHf82CHe2WDaI2OJYUMaF6exKuAQAIpclhavTTX-NWT8qmHOYvEFxS9wTrg7gyPGZgVBEX1Sr5glRg14tog15bhbz5Ligo0kelkENznkaPyBzxX2QjGVRurF-Fv5L20zRZewfiB/s0/FB_IMG_1619198831132.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3PvpYJ3HIyAbmconor5TDLVKpinsmEFkhTg&s",
    "https://img.freepik.com/premium-vector/letter-m-with-heart-shape_634477-1445.jpg?semt=ais_hybrid&w=740&q=80"
];

var count=0;
var imgsinterval = setInterval(function(){
    imgtag.src=ImgsUrl[count];
    count++;
    if(count==5){
        count=0;    
    }
},2000);

function clearimgsinterval(){
    clearInterval(imgsinterval);
}