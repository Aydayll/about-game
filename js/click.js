const langbtn = document.getElementById("langItems");
const dropitem = document.getElementById("dropItem")
function drop() {
    langbtn.addEventListener('click', function (){
        dropitem.classList.toggle('is-on')
    });
    langbtn.addEventListener('click', function (){
        dropitem.classList.toggle('is-off')
    });
    
};
drop();
const accordeon = () => {
    const accordeonBtn = document.querySelectorAll(".accordeon__items");
    const accordeonItem = document.querySelectorAll(".accordeon__description");
    const accordeonPoint = document.querySelectorAll(".accordeon__title");
    accordeonBtn.forEach((item,i) =>{
        item.addEventListener('click', function (){
            if (i != accordeonBtn.length - 1) {
                accordeonPoint[i].classList.toggle('is-white')
                accordeonItem[i].classList.toggle('is-active')
                }
            else if ((i == accordeonBtn.length - 1)){
                accordeonItem[i].classList.toggle('is-active')
                accordeonPoint[i].classList.toggle('is-point')
            }
            });
        })
    }
accordeon();


const burgerbtn = document.getElementById("burger__icon");
const burgeractive = document.getElementById("burger");
function move() {
    burgerbtn.addEventListener('click', function (){
        burgeractive.classList.toggle('is-active')
    });
};
move();