let darkMood = localStorage.getItem('darkmood');
let fa_moon = document.querySelectorAll('#fa-moon');


const enableDarkMood = () => {
    document.body.classList.add('darkmood');
    localStorage.setItem('darkmood' , 'enabled');
}
const disabldDarkMood = () => {
    document.body.classList.remove('darkmood');
    localStorage.setItem('darkmood' , null);
}
if(darkMood === 'enabled') {
    enableDarkMood();
}

for(const i of fa_moon){
    i.addEventListener('click' , () => {
        darkMood = localStorage.getItem('darkmood')
       if(darkMood !== 'enabled'){
        enableDarkMood();
       }else{
        disabldDarkMood();
       }
    })
}
