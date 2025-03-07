document.getElementById("confirmBtn").addEventListener("click", function (event) {
    let btn = document.getElementById("confirmBtn").onclick=()=>{
        let toast = document.getElementById("toast");
        toast.classList.add("show");
    
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000); // Hide after 3 seconds
    }   
    event.preventDefault(); // Prevent form submission if needed

    let toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000); // Hide after 3 seconds
});



let btn = document.getElementById("confirmBtn").onclick=()=>{
    let toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000); // Hide after 3 seconds
}  

function showToast() {
  // Display the toast
  const toast = document.getElementById('toast');
  toast.style.display = 'block';
  
  // Hide the toast after 3 seconds
  setTimeout(function() {
    toast.style.display = 'none';
  }, 3000);
}




/*toast*/
// Function to show the toast notification
function showToast() {
    var toast = document.getElementById("toast");
    toast.classList.add("show"); // Add the 'show' class to display the toast

    // After 3 seconds, remove the 'show' class to hide the toast
    setTimeout(function() {
        toast.classList.remove("show");
    }, 3000); // Toast will disappear after 3 seconds
}
//bus//
document.getElementById("route").addEventListener("change", function() {
    var selectedOptions = this.selectedOptions;
    if (selectedOptions.length > 3) {
        alert("You can only select up to 3 routes!");
        this.value = "";
    }
});





