var backdrop = document.querySelector(".backdrop");
var selectPlanButtons = document.querySelectorAll(".plan .btn");
var modal = document.querySelector(".modal");
var closeModalButton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    // backdrop.className = "open"; //This would actually overwrite the complete class list
    backdrop.classList.add("open");
    modal.classList.add("open");
  });
}

if (closeModalButton) {
  closeModalButton.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", function () {
  //   mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

function closeModal() {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  backdrop.classList.remove("open");
  if (modal) {
    modal.classList.remove("open");
  }
}

toggleButton.addEventListener("click", function () {
  //   mobileNav.style.display = "block";
  //   backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
