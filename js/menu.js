
let aside = document.getElementById("aside");
let menu = document.getElementById("menu");
let close = document.querySelectorAll('[data-close]');
let ovarlay = document.querySelector('.ovarlay');

menu.addEventListener("click" , function() {
    aside.classList.toggle("menu-active");
    ovarlay.style.display = 'block';
})

let btn_menu = document.getElementById("btn-menu")

// btn_menu.addEventListener("click" , function() {
//     aside.classList.remove("menu-active")
// })

for(const i of close) {
    i.addEventListener('click' , function() {
        aside.classList.toggle("menu-active");
        ovarlay.style.display = 'none';
    })
}

let btn_search = document.querySelectorAll('#btn-search');
let close_pop = document.querySelectorAll('#close-pop');
let pop_search = document.getElementById('pop-search');

for( const i of btn_search){
    i.addEventListener('click' , function() {
        // pop_search.style.display = 'block';
        pop_search.style.top = '50%';
    })
}
for( const c of close_pop){
    c.addEventListener('click' , function() {
        // pop_search.style.display = 'none';
        pop_search.style.top = '-50%';
        
    })
}

