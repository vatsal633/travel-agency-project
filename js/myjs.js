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


<script>
function showToast() {
  // Display the toast
  const toast = document.getElementById('toast');
  toast.style.display = 'block';
  
  // Hide the toast after 3 seconds
  setTimeout(function() {
    toast.style.display = 'none';
  }, 3000);
}
</script>