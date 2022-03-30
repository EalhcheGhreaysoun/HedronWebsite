var isDark = true;

function change()
{
    if (isDark == true)
    {
        whiteColorSceme();
    }
    else if (isDark == false)
    {
        blackColorSceme();
    }
}

function whiteColorSceme()
{
    var dropdownContent = document.getElementsByClassName('dropdown-content');
    var logoTitle = document.getElementsByClassName('logoTitle');
    var logo = document.getElementsByClassName('logo');
    var menuButton = document.getElementsByClassName('menuButton');

    var pageTitle = document.getElementById('pageTitle');

    var bodyElements = document.getElementsByTagName('body');
    var links = document.getElementsByTagName('a');

    var switchTheme = document.getElementById('colorThemeButton');

    bodyElements[0].style.backgroundColor = "white";
    bodyElements[0].style.color = "black";

    dropdownContent[0].style.backgroundColor = "black";
    for (i = 0; i < links.length; i++)
    {
        links[i].style.color = "white";
    }

    logoTitle[0].style.color = "black";
    logo[0].src = "src/HedronLogoB.png";
    menuButton[0].src = "src/menuButtonB.png";

    switchTheme.src = "src/moon.png";
    isDark = false;
};
function blackColorSceme()
{
    var dropdownContent = document.getElementsByClassName('dropdown-content');
    var logoTitle = document.getElementsByClassName('logoTitle');
    var logo = document.getElementsByClassName('logo');
    var menuButton = document.getElementsByClassName('menuButton');

    var pageTitle = document.getElementById('pageTitle');

    var bodyElements = document.getElementsByTagName('body');
    var links = document.getElementsByTagName('a');

    var switchTheme = document.getElementById('colorThemeButton');

    bodyElements[0].style.backgroundColor = "black";
    bodyElements[0].style.color = "white";

    dropdownContent[0].style.backgroundColor = "white";
    for (i = 0; i < links.length; i++)
    {
        links[i].style.color = "black";
    }

    logoTitle[0].style.color = "white";
    logo[0].src = "src/HedronLogoW.png";
    menuButton[0].src = "src/menuButton.png";

    switchTheme.src = "src/sun.png";
    isDark = true;
};
