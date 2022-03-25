var isDark = true;

document.getElementsByClass("colorThemeButton").onclick = function() {whiteColorSceme()};

function change(){
    if (isDark == true){
        whiteColorSceme();
    }
    else if (isDark ==  false){
        blackColorSceme();
    }
}

function whiteColorSceme(){
    var dropdownContent = document.getElementsByClass('dropdown-content');
    
    var logoTitle = document.getElementsByClass('logoTitle');
    
    var pageTitle = document.getElementById('pageTitle');

    var bodyElements = document.getElementsByTag('body');
    var links = document.getElementsByTag('a');

    var switchTheme = document.getElementById('colorThemeButton');
    
    bodyElements[0].style.backgroundColor = white;
    bodyElements[0].style.color = black;

    dropdownContent[0].style.backgroundColor = black;
    for(i=0; i < links.length; i++){
        links[i].style.color = black;
    }
    
    logoTitle[0].style.color = black;

    switchTheme.style.backgroundImage = "url(src/moon.png)";
    isDark = false;

};
function blackColorSceme()
{
    var dropdownContent = document.getElementsByClass('dropdown-content');
    var logoTitle = document.getElementsByClass('logoTitle');

    var pageTitle = document.getElementById('pageTitle');

    var bodyElements = document.getElementsByTag('body');
    var links = document.getElementsByTag('a');

    var switchTheme = document.getElementById('colorThemeButton');

    bodyElements.style.backgroundColor = black;
    bodyElements.style.color = white;

    dropdownContent.style.backgroundColor = white;

    links.style.color = white;

    logoTitle.style.color = white;

    switchTheme.style.backgroundImage = "url(src/sun.png)";
    isDark = true;
};
