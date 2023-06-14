// consider an array
// 6 item so we take 6 obj
const pepsi = [
    {
        name:"Pepsi Diet",
        amount:"350 cl",
        amount_per:"8.6%",
        fat:"0g",
        fat_per:"0%",
        sodium:"310mg",
        sodium_per:"1%",
        carbohytred:"48g",
        carbohytred_per:"15.3%",
        protien:"0g",
        protien_per:"0%",
        ml:"250ml",
        poster1:"img/1 Pespi white.png",// pep icon
        poster2:"img/1 Pespi blue.png",
        main_poster:"img/pepsi diet.png"
    },
    {
        name:"Pepsi Classic",
        amount:"330 cl",
        amount_per:"7.5%",
        fat:"0g",
        fat_per:"0%",
        sodium:"310mg",
        sodium_per:"1%",
        carbohytred:"41g",
        carbohytred_per:"14%",
        protien:"0g",
        protien_per:"0%",
        ml:"330ml",
        poster1:"img/2 can white.png",// pep icon
        poster2:"img/2 can blue.png",
        main_poster:"img/can.png"
    },
    {
        name:"Pepsi 500 ML",
        amount:"350 cl",
        amount_per:"12.9%",
        fat:"0g",
        fat_per:"0%",
        sodium:"40mg",
        sodium_per:"2%",
        carbohytred:"52g",
        carbohytred_per:"21.7%",
        protien:"0g",
        protien_per:"0%",
        ml:"500ml",
        poster1:"img/3 Pepsi white.png",// pep icon
        poster2:"img/3 Pepsi blue.png",
        main_poster:"img/pepsi .5ltr.png"
    },
    {
        name:"Pepsi 1 LTR",
        amount:"510 cl",
        amount_per:"16.3%",
        fat:"0g",
        fat_per:"0%",
        sodium:"49mg",
        sodium_per:"2%",
        carbohytred:"61g",
        carbohytred_per:"27.4%",
        protien:"0g",
        protien_per:"0%",
        ml:"1 LTR",
        poster1:"img/4 Pepsi white.png",// pep icon
        poster2:"img/4 Pepsi blue.png",
        main_poster:"img/pepsi 1ltr.png"
    },
    {
        name:"Pepsi 1.5 LTR",
        amount:"625 cl",
        amount_per:"19.4%",
        fat:"0g",
        fat_per:"0%",
        sodium:"50mg",
        sodium_per:"3%",
        carbohytred:"66g",
        carbohytred_per:"30.8%",
        protien:"0g",
        protien_per:"0%",
        ml:"1.5 LTR",
        poster1:"img/5 Pepsi white.png",// pep icon
        poster2:"img/5 Pepsi blue.png",
        main_poster:"img/pepsi 1.5ltr.png"
    },
    {
        name:"Pepsi 2 LTR",
        amount:"729 cl",
        amount_per:"37.2%",
        fat:"0g",
        fat_per:"0%",
        sodium:"60mg",
        sodium_per:"4%",
        carbohytred:"66g",
        carbohytred_per:"33.2%",
        protien:"0g",
        protien_per:"0%",
        ml:"2 LTR",
        poster1:"img/6 Pepsi white.png",// pep icon
        poster2:"img/6 Pepsi blue.png",
        main_poster:"img/pepsi 2ltr.png"
    }
]

// element = ele
//src attribute specifies the URL of an external script file
Array.from(document.getElementsByClassName('card_pepsi')).forEach((ele,i)=>{
    ele.addEventListener('mouseover',()=>{
        document.getElementsByClassName('pepsi_hover_img')[i].src = pepsi[i].poster1;
    })
    // hatney key liye use mouse out and use poster 2
    ele.addEventListener('mouseout',()=>{
        document.getElementsByClassName('pepsi_hover_img')[i].src = pepsi[i].poster2;
    })
})

// on click img and content change same as above we karey gey
Array.from(document.getElementsByClassName('card_pepsi')).forEach((ele,i)=>{
    ele.addEventListener('click',()=>{
        document.getElementById('Main_bottle').src = pepsi[i].main_poster;
        document.getElementById('main_title').innerText = pepsi[i].name;
        document.getElementById('ml_title').innerText = pepsi[i].ml;
        document.getElementById('cl').innerText = pepsi[i].amount;
        document.getElementById('cl1').innerText = pepsi[i].amount_per;
        document.getElementById('fat').innerText = pepsi[i].fat;
        document.getElementById('fat1').innerText = pepsi[i].fat_per;
        document.getElementById('sodium').innerText = pepsi[i].sodium;
        document.getElementById('sodium1').innerText = pepsi[i].sodium_per;
        document.getElementById('carbohydrates').innerText = pepsi[i].carbohytred;
        document.getElementById('carbohydrates1').innerText = pepsi[i].carbohytred_per;
        document.getElementById('protien').innerText = pepsi[i].protien;
        document.getElementById('protien1').innerText = pepsi[i].protien_per;
        
    })
})


let index = 1;
document.getElementById('left-btn').addEventListener('click',()=>{
    // jab bhi click hu index value ek kaam hu jaye
    index -=1;
    if(index<0){
        index = pepsi.length;
    }
    document.getElementById('Main_bottle').src = pepsi[index].main_poster;
    document.getElementById('main_title').innerText = pepsi[index].name;
    document.getElementById('ml_title').innerText = pepsi[index].ml;
    document.getElementById('cl').innerText = pepsi[index].amount;
    document.getElementById('cl1').innerText = pepsi[index].amount_per;
    document.getElementById('fat').innerText = pepsi[index].fat;
    document.getElementById('fat1').innerText = pepsi[index].fat_per;
    document.getElementById('sodium').innerText = pepsi[index].sodium;
    document.getElementById('sodium1').innerText = pepsi[index].sodium_per;
    document.getElementById('carbohydrates').innerText = pepsi[index].carbohytred;
    document.getElementById('carbohydrates1').innerText = pepsi[index].carbohytred_per;
    document.getElementById('protien').innerText = pepsi[index].protien;
    document.getElementById('protien1').innerText = pepsi[index].protien_per;
})

document.getElementById('right_btn').addEventListener('click',()=>{
    // jab bhi click hu index value ek kaam hu jaye
    index ++;
    if(index>pepsi.length){
        index = 0;
    }
    document.getElementById('Main_bottle').src = pepsi[index].main_poster;
    document.getElementById('main_title').innerText = pepsi[index].name;
    document.getElementById('ml_title').innerText = pepsi[index].ml;
    document.getElementById('cl').innerText = pepsi[index].amount;
    document.getElementById('cl1').innerText = pepsi[index].amount_per;
    document.getElementById('fat').innerText = pepsi[index].fat;
    document.getElementById('fat1').innerText = pepsi[index].fat_per;
    document.getElementById('sodium').innerText = pepsi[index].sodium;
    document.getElementById('sodium1').innerText = pepsi[index].sodium_per;
    document.getElementById('carbohydrates').innerText = pepsi[index].carbohytred;
    document.getElementById('carbohydrates1').innerText = pepsi[index].carbohytred_per;
    document.getElementById('protien').innerText = pepsi[index].protien;
    document.getElementById('protien1').innerText = pepsi[index].protien_per;
})