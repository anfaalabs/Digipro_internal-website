class NavbarToggler {
  constructor({ toggler, target }) {
    this.toggler = toggler;
    this.target = target;
  }

  activate() {
    this.toggler.addEventListener("click", () => this._toggle());

    this._activateOnClickMenu();
  }

  _toggle() {
    if (this.toggler.classList.contains("active")) {
      this.toggler.classList.remove("active");
      this.target.classList.remove("active");
    } else {
      this.toggler.classList.add("active");
      this.target.classList.add("active");
    }
  }

  _activateOnClickMenu() {
    const links = [...document.querySelectorAll(".navigation-link")];

    links.forEach((link) =>
      link.addEventListener("click", () => {
        this.toggler.classList.remove("active");
        this.target.classList.remove("active");
      })
    );
  }
}

export default NavbarToggler;
