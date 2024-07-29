let selectors = document.querySelectorAll(".education-div-flex,.c1,.c2,.c3");
let consoled=document.querySelector(".c1")
console.log(selectors)
selectors.forEach(selector => {
    selector.addEventListener("mouseover", () => {
        selector.style.backgroundColor = "black";
        selector.style.color="white";
        let selector1 = selector.querySelectorAll("h3");
        selector1.forEach(h3 => {
            h3.style.color = "lightgreen";
        });
        let image=selector.querySelectorAll("img");
        image.forEach(img=>{
            img.style.filter="";
        })
    });

    selector.addEventListener("mouseout", () => {
        selector.style.backgroundColor = "";
        selector.style.color="";
        
        let selector1 = selector.querySelectorAll("h3");
        selector1.forEach(h3 => {
            h3.style.backgroundColor = "";
        });
        let image=selector.querySelectorAll("img");
        image.forEach(img=>{
            img.style.filter="brightness(0.5)";
            img.style.zIndex="10";
        })

    });
});
