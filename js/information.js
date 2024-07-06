function show (elm1, elm2) {
    var i;
    var tab ;
    let content = document.getElementsByClassName('content');
    for(i=0; i<content.length; i++){
        content[i].style.display = 'none';
    }
    tab = document.getElementsByClassName('btn-tab')
    for(i=0;i<tab.length; i++) {
        tab[i].className = tab[i].className.replace('active' , '')
    }
    document.getElementById(elm2).style.display = 'flex';
    elm1.currentTarget.className += ' active';
}