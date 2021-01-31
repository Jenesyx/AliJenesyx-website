window.onload = function(){
    document.body.onscroll = function(e){
        if (document.getElementById('socialmedia').getBoundingClientRect().y < (document.body.clientHeight * 1.5)) document.getElementById('nav').classList.add('toggled')
        else document.getElementById('nav').classList.remove('toggled');
    }
}
