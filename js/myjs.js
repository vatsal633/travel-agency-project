document.getElementById("confirmBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission if needed

    let toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000); // Hide after 3 seconds
});
