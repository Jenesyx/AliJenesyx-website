window.onload = function(){
    document.body.onscroll = function(e){
        if (document.getElementById('socialmedia').getBoundingClientRect().y < (document.body.clientHeight * 1.5)) document.getElementById('nav').classList.add('toggled')
        else document.getElementById('nav').classList.remove('toggled');
    }
}

function banana(t) 
{   
    if (t == "in")
    {
        document.getElementById('text1').style.left = "290px"
        document.getElementById('text1').style.bottom = "125px"
        return
    }
    
    else (t == "out")
    {
        document.getElementById('text1').style.left = "180px"
        document.getElementById('text1').style.bottom = "40px"
        return
    }
}


function moz(t) 
{   
    if (t == "in")
    {
        document.getElementById('text2').style.left = "310px"
        document.getElementById('text2').style.bottom = "120px"
        return
    }
    
    else (t == "out")
    {
        document.getElementById('text2').style.left = "230px"
        document.getElementById('text2').style.bottom = "20px"
        return
    }
}

function sib(t) 
{   
    if (t == "in")
    {
        document.getElementById('text3').style.left = "360px"
        document.getElementById('text3').style.bottom = "120px"
        return
    }
    
    else (t == "out")
    {
        document.getElementById('text3').style.left = "260px"
        document.getElementById('text3').style.bottom = "20px"
        return
    }
}

function gilas(t) 
{   
    if (t == "in")
    {
        document.getElementById('text4').style.left = "310px"
        document.getElementById('text4').style.bottom = "120px"
        return
    }
    
    else (t == "out")
    {
        document.getElementById('text4').style.left = "180px"
        document.getElementById('text4').style.bottom = "30px"
        return
    }
}