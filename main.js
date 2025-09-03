var ImgsContainer = document.querySelector("#imgs-container");
var imgtag = document.querySelector('img');
var thebutton = document.querySelector("button");

console.log(imgtag);
console.log(imgtag.src);
console.log(ImgsContainer);
console.log(thebutton);
console.log(thebutton.innerHTML);

// console.log(imgtag.currentSrc);
var ImgsUrl =[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3fTonNAxovtprsexDHEdS2-znhWaewwm6w&s",
    "https://english.news.cn/20250408/99961d4c7fdf4edebb0c357196ced5ad/uPQOUm67nWPUS1UP.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJdtLvBTHf82CHe2WDaI2OJYUMaF6exKuAQAIpclhavTTX-NWT8qmHOYvEFxS9wTrg7gyPGZgVBEX1Sr5glRg14tog15bhbz5Ligo0kelkENznkaPyBzxX2QjGVRurF-Fv5L20zRZewfiB/s0/FB_IMG_1619198831132.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3PvpYJ3HIyAbmconor5TDLVKpinsmEFkhTg&s",
    "https://img.freepik.com/premium-vector/letter-m-with-heart-shape_634477-1445.jpg?semt=ais_hybrid&w=740&q=80"
];

var count=0;
var intervaltest=true;
var imgsinterval;

function TestTheInterval(){
    // console.log("sasa");
    if(intervaltest){
        thebutton.innerHTML=`End the images interval`
        thebutton.style.backgroundColor="red";
        imgsinterval=setInterval(function(){
            imgtag.src=ImgsUrl[count];
            count++;
            if(count==5){
                count=0;    
            }
            
            
        },2000);
        intervaltest=false;
        console.log(intervaltest);
    }
    else{
        thebutton.innerHTML=`Start The images interval`
        thebutton.style.backgroundColor="chartreuse";
        clearimgsinterval();
        intervaltest=true;
        console.log(intervaltest);
        
    }
}

function clearimgsinterval(){
    clearInterval(imgsinterval);
}