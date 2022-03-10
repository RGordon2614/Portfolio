function dropdownMenu() {
    var dropDown = document.getElementById("dropdownClick");
   /*### Change topnav to topnav.responsive ###*/
    if (dropDown.className === "topnav") {
        dropDown.className += " responsive";
    }
    else {
        dropDown.className = "topnav";
    }
}