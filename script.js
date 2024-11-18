// Select modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

// Add click event to each image
document.querySelectorAll(".image-item img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.dataset.full;
    });
});

// Close modal on close button click
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal on outside click
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
