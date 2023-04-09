
let flag=0;
function control(x){
flag=flag+x;
slideshow(flag);

}
slideshow(flag)
function slideshow(num){
    let one=document.getElementsByClassName('row1');
    if(num==one.length){
        flag=0;
        num=0;
    }
    if(num<0){
        flag=one.length-1;
        num=one.length-1;
    }
    for(let y of one){
        y.style.display="none"; 
    }
    one[num].style.display="block";
}
// js for brands slider

let oneSlide = document.querySelectorAll(".cardslides")
let count = 0;
oneSlide.forEach((cardslides,index)=>{
    cardslides.style.left=`${index*100}%`
}
)
const nxt = () => {

if(count<oneSlide.length-1){
    count++;
    slideImage();
}
else if(count<0){
    count=0;
    count++;
    slideImage();
}
}

const pre = () => {
if (count != 0) {
count--;
slideImage();
}
else if(count=0){
count=oneSlide.length;
count--;
}
}

const slideImage=()=>{  
    oneSlide.forEach((cardslides)=>{
        cardslides.style.transform=`translateX(-${count*100}%)`
    })
}