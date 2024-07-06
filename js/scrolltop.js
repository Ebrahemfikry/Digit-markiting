let btn_scroll = document.getElementById('scroll-top');

window.onscroll = function () {
    if(this.scrollY >= 200) {
        btn_scroll.style.opacity = '1'; 
    }else{
        btn_scroll.style.opacity = '0';
    }
}



btn_scroll.addEventListener('click' , () => {
    window.scroll(0 , 0);
});
