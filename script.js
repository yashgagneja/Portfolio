const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const progressB = [75,70,75,55,90,65];
window.addEventListener("scroll",()=> {
    if(window.pageYOffset >=navbarOffsetTop){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
    document.querySelectorAll('.progress-percent').forEach((el,i) =>{
        el.style.width = `${progressB[i]}%`;
        });
});

