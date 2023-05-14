// Get the modal
var modal = document.querySelector(".image-modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.querySelectorAll(".image-grid-item img");
var modalImg = document.querySelector(".modal-img");
var captionText = document.querySelector(".caption");

images.forEach(function (image) {
    image.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.nextElementSibling.innerHTML;
    });
});

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
    modal.style.display = "none";
});
