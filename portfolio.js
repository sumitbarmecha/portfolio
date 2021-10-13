let imgsection = document.querySelector(".section1");
let imgsection1 = document.querySelector(".sections");
let skills = document.querySelector(".section2");
let web = document.querySelector(".section3");
let projects = document.querySelector(".section4");
let sample = document.querySelector(".section5");
let lasttile = document.querySelector(".section5");
let lastlasttile = document.querySelector(".section6");
let main = document.querySelector("#main");
let nextpage = document.querySelector(".img1");
let homepage = document.querySelector(".name");
let footer = document.querySelector(".footer");
let about = document.querySelector(".about");
let aboutcontent = document.querySelector(".aboutcontent");
let photoimg = document.querySelector(".photoimg");
let photoimgeffect = document.querySelector(".c");
let aboutme = document.querySelector(".aboutme");
let text = document.querySelector(".text");
let body = document.querySelector("body");
let line = document.querySelector(".line");
let myname = document.querySelector(".name");
let myskills = document.querySelector(".myskills");
let webcontent = document.querySelector(".webdevcontent");
let webfle1 = document.getElementsByClassName(".webflex");
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let quote = document.querySelector("#quote");

const returntomainpage = () => {
    main.style.display = "flex";
    footer.style.display = "none";
    nextpage.style.display = "none";
    footer.style.display = "none";
    aboutcontent.style.display = "none";
    line.style.borderColor = "#bebebe";
    about.style.color = "#bebebe";
    myname.style.color = "#bebebe";
    body.style.backgroundColor = "#3a3a3a";
    // body.style.animationName = "background2";
    myskills.style.display = "none";
    webcontent.style.display = "none";
    body.style.animationName = "background4";
    body.style.animationDuration = "0.2s";
    main.style.animationDuration = "0s";
    imgsection.style.animationDuration = "0s";
    projects.style.animationDuration = "0s";
    sample.style.animationDuration = "0s";
    lasttile.style.animationDuration = "0s";

    skills.style.animationDuration = "0s";
    web.style.animationDuration = "0s";
    quote.style.display = "block";
    quote.style.animationDuration = "0s";

    imgsection1.style.animationDuration = "0s";

};
imgsection.addEventListener("click", function() {
    main.style.display = "none";
    nextpage.style.display = "none";
    footer.style.display = "flex";
    aboutcontent.style.display = "flex";
    about.innerHTML = "CLOSE";
    about.classList.add("close");
    about.classList.remove("about");
    body.style.color = "#bebebe";
    line.style.borderColor = "#bebebe";
    about.style.color = "#bebebe";
    myname.style.color = "#bebebe";
    body.style.animationName = "background2";
    body.style.backgroundColor = "#3a3a3a";
    about.style.animationDuration = "0s";
    myskills.style.display = "none";
    webcontent.style.display = "none";
    quote.style.display = "none";
    //till here about is converted to close by all means
    let closeabout = document.querySelector(".close");
    closeabout.addEventListener("click", function() {
        main.style.display = "flex";
        footer.style.display = "none";
        aboutcontent.style.display = "none";
        about.innerHTML = "ABOUT";
        about.classList.add("about");
        about.classList.remove("close");
        line.style.borderColor = "#bebebe";
        about.style.color = "#bebebe";
        myname.style.color = "#bebebe";
        body.style.backgroundColor = "#3a3a3a";
        myskills.style.display = "none";
        webcontent.style.display = "none";
        quote.style.display = "block";
        //till here about is converted to close by all means


    })

})

about.addEventListener("click", function() {
    main.style.display = "none";
    nextpage.style.display = "none";
    footer.style.display = "flex";
    aboutcontent.style.display = "flex";
    about.innerHTML = "CLOSE";
    about.classList.add("close");
    about.classList.remove("about");
    body.style.color = "#bebebe";
    line.style.borderColor = "#bebebe";
    about.style.color = "#bebebe";
    myname.style.color = "#bebebe";
    body.style.animationName = "background2";
    body.style.backgroundColor = "#3a3a3a";
    about.style.animationDuration = "0s";
    myskills.style.display = "none";
    webcontent.style.display = "none";
    quote.style.display = "none";
    //till here about is converted to close by all means
    let closeabout = document.querySelector(".close");
    closeabout.addEventListener("click", function() {
        main.style.display = "flex";
        footer.style.display = "none";
        aboutcontent.style.display = "none";
        about.innerHTML = "ABOUT";
        about.classList.add("about");
        about.classList.remove("close");
        line.style.borderColor = "#bebebe";
        about.style.color = "#bebebe";
        myname.style.color = "#bebebe";
        body.style.backgroundColor = "#3a3a3a";
        myskills.style.display = "none";
        webcontent.style.display = "none";
        quote.style.display = "block";
        //till here about is converted to close by all means


    })


})

homepage.addEventListener("click", function() {
    returntomainpage();
})
photoimg.addEventListener("click", function() {
    photoimg.style.display = "none";
    photoimgeffect.style.display = "none";
    aboutme.style.display = "flex";
    text.style.display = "none";
    myskills.style.display = "none";
    webcontent.style.display = "none";
    quote.style.display = "none";
})
skills.addEventListener("click", function() {
    main.style.display = "none";
    myskills.style.display = "flex";
    body.style.backgroundColor = "#de4c3f";
    about.style.animationDuration = "0s";
    body.style.animationName = "background5";
    body.style.color = "#bac4b8";
    line.style.borderColor = "#fff1ce";
    about.style.color = "#bac4b8";
    myname.style.color = "#fff1ce";
    about.style.color = "#fff1ce";
    myskills.style.color = "#fff1ce";
    webcontent.style.display = "none";
    quote.style.display = "none";
    // text.style.color = "#bac4b8";


})
web.addEventListener("click", function() {
    main.style.display = "none";
    webcontent.style.display = "block";
    body.style.backgroundColor = "#32447f";
    about.style.animationDuration = "0s";
    body.style.animationName = "background3";
    body.style.color = "#bac4b8";
    line.style.borderColor = "#d2dcf2";
    about.style.color = "#d2dcf2";
    myname.style.color = "#d2dcf2";
    about.style.color = "#d2dcf2";
    webcontent.style.color = "#d2dcf2";
    a.style.color = "#d2dcf2";
    a.style.color = "#d2dcf2";
    b.style.color = "#d2dcf2";
    quote.style.display = "none";



})