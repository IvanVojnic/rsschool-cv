function openNavBar(){
    let navBar = document.getElementById("navListID");
    if (navBar.className === "navbar-nav d-flex col-8 navList") {
        navBar.className += " mobileNavList";
    } else {
        navBar.className = "navbar-nav d-flex col-8 navList";
    }
}
