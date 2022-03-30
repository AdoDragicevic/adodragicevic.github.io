

  const btnContactMe   = document.getElementById("btn-contact-me");
  const overlay        = document.getElementById("overlay");
  const overlayContent = document.getElementById("overlay-content");

  btnContactMe.addEventListener("click", toggleModal);
  overlay.addEventListener("click", toggleModal);
  overlayContent.addEventListener("click", e => e.prevnetPropagation());

  function toggleModal() {
    const isHidden = overlay.classList.contains("d-none");
    if (isHidden) {
      overlay.classList.remove("d-none");
    }
    else {
      overlay.classList.add("d-none");
    }
  }
