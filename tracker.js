function setUp() {
    const menuButton = document.getElementById("menu-hamburger");
    const menuBar = document.getElementById("dropdown-menu");
    const illPhoto = document.getElementById("ill-box");
    const headerTag = document.getElementById("header-bar");
    console.log(headerTag);
    

    menuButton.onclick = function () {
        if (menuBar.className == "") {
            menuButton.removeAttribute("src");
            menuButton.setAttribute("src", "images/icon-close.svg");

            menuBar.className = "open";
        }

        else {
            menuButton.removeAttribute("src");
            menuButton.setAttribute("src", "images/icon-hamburger.svg");

            menuBar.className = "";
        }
    }


    if (document.body.clientWidth >= 768) {
        headerTag.removeChild(menuButton);
        headerTag.appendChild(menuBar);
    }


    /*const bodyWidth = document.body.clientWidth;
    console.log(bodyWidth);

    illPhoto.style.width = `${bodyWidth}px`;*/

    

}


window.onload = function () {
    setUp();
}