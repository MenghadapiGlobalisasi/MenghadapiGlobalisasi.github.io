var element = document.getElementById("sidebar");
var overlay = document.getElementById("overlay");


function openSidebar() {
    console.log("hi");
    element.style.right = "0";
    element.style.visibility = "visible";
    // element.style.display = "initial";
    overlay.style.visibility = "visible";
    overlay.style.opacity = "100%";
}

function closeSidebar() {
    element.style.right = "-400px";
    element.style.visibility = "hidden";
    // element.style.display = "none";
    overlay.style.visibility = "collapse";
    overlay.style.opacity = "0%";
}
