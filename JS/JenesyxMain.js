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
        document.getElementById('youtube-title').style.marginLeft = "100px"
        document.getElementById('youtube-title').style.bottom = "70px"
        return
    }
    
    else (t == "out")
    {
        document.getElementById('youtube-title').style.marginLeft = "0"
        document.getElementById('youtube-title').style.bottom = "0"
        return
    }
    
}

function apple(t) 
{   
    if (t == "in")
    {
        document.getElementById('gaming-title').style.marginLeft = "100px"
        document.getElementById('gaming-title').style.bottom = "70px"
        return
    }
    
    else (t == "out")
    {
        document.getElementById('gaming-title').style.marginLeft = "0"
        document.getElementById('gaming-title').style.bottom = "0"
        return
    }
    
}

function ananas(t) 
{   
    if (t == "in")
    {
        document.getElementById('adobes-title').style.marginLeft = "100px"
        document.getElementById('adobes-title').style.bottom = "70px"
        return
    }
    
    else (t == "out")
    {
        document.getElementById('adobes-title').style.marginLeft = "0"
        document.getElementById('adobes-title').style.bottom = "0"
        return
    }
    
}
