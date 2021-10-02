let imgsection = document.querySelector("img");
let main = document.getElementById("main");
let img1 = document.getElementById("nextpage");
let nextpage = document.getElementsByClassName("img1")
imgsection.addEventListener("click", function() {
    main.style.display = "none";
    imgsection.style.display = "inline-block";
    this.classList.replace("img", "afterclickimg");
    this.classList.remove();
    console.log(nextpage.style.display);
    // nextpage.style.display = "block";
    nextpage.style.remove("none");
    console.log(nextpage.style.display);
    nextpage.style.visibility = "visible";
    nextpage.style.zIndex = "1";
    nextpage.style.position = "relative";
    img1.style.display = "inline-block";


})