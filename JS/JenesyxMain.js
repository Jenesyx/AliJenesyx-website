function onload()
{
    var typed = new Typed('#typing', 
    {
        strings: 
        [
            "Jenesyx", "Bidkhori", "Website", 
            "Your friend", "Your family",
            "is just kidding"
        ],
        typeSpeed: 120,
        loop: true,
        startDelay: 2200,
        backSpeed: 60
    });

    $('.example-slider').slick(
    {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        autoplay: true,
        centerMode: false,
        dots: true,
    });
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
