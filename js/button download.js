const cvButton = document.getElementById("cvButton");
const toast = document.getElementById("toast");

if (cvButton && toast) {
    cvButton.addEventListener("click", () => {
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
    });
}