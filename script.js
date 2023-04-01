var menu = $(".menu");
var hamburger = $(".hamburger");

hamburger.on("click", () => {
    menu.toggle("slidedown");
})