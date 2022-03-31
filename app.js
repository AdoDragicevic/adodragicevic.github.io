( () => {

  const btnContact     = document.getElementById("btn-contact");
  const btnNavbar      = document.getElementById("btn-navbar");

  const overlayContact = document.getElementById("overlay-contact");
  const overlayNavbar  = document.getElementById("overlay-navbar");

  const showModal = el => el.setAttribute("class", "overlay");
  const hideModal = el => el.setAttribute("class", "overlay d-none");

  btnContact.addEventListener("click", showModal.bind(this, overlayContact));
  btnNavbar.addEventListener("click", showModal.bind(this, overlayNavbar));

  overlayContact.addEventListener("click", hideModal.bind(this, overlayContact));
  overlayNavbar.addEventListener("click", hideModal.bind(this, overlayNavbar));

})();

