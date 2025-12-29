document.addEventListener("DOMContentLoaded", function () {

    const modal = document.createElement("div");
    const img = document.createElement("img");

    modal.id = "imageModal";
    modal.appendChild(img);
    document.body.appendChild(modal);

    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0, 0, 0, 0.85)";
    modal.style.backdropFilter = "blur(5px)";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "2000";
    modal.style.cursor = "zoom-out";

    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    img.style.borderRadius = "10px";
    img.style.boxShadow = "0 0 30px #00aaff";
    img.style.animation = "zoomIn 0.3s ease";

    document.querySelectorAll(".gallery img").forEach(image => {
        image.style.cursor = "zoom-in";

        image.addEventListener("click", () => {
            img.src = image.src;
            modal.style.display = "flex";
        });
    });

    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });
});
console.log("menu.js працює!");
