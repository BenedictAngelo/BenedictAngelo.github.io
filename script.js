const copyEmailBtn = document.getElementById("copyEmail");
const notification = document.getElementById("emailNotification");

copyEmailBtn.addEventListener("click", function (e) {
    e.preventDefault();

    navigator.clipboard.writeText("BenedictAngelo@protonmail.com").then(() => {
        notification.classList.add("show");

        setTimeout(() => {
            notification.classList.remove("show");
        }, 2000);
    });
});
