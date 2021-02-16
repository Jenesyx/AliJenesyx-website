window.onload = function(){
    document.body.onscroll = function(e){
        if (document.getElementById('socialmedia').getBoundingClientRect().y < (document.body.clientHeight * 1.5)) document.getElementById('nav').classList.add('toggled')
        else document.getElementById('nav').classList.remove('toggled');
    }
}

function havij() 
{
    document.getElementById('text1').style.left = "290px"
    document.getElementById('text1').style.bottom = "125px"
}

function moz() 
{
    document.getElementById('text2').style.left = "330px"
    document.getElementById('text2').style.bottom = "120px"
}

function sib() 
{
    document.getElementById('text3').style.left = "370px"
    document.getElementById('text3').style.bottom = "120px"
}

function gilas() 
{
    document.getElementById('text4').style.left = "290px"
    document.getElementById('text4').style.bottom = "125px"
}

function khiar()
{
    document.getElementById('text1')
}