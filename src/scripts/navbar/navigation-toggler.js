class NavbarToggler {
  constructor({ toggler, target }) {
    this.toggler = toggler;
    this.menu = target;
  }

  activate() {
    this.toggler?.addEventListener("click", () => this._toggle());

    this._activateOnClickMenu();
  }

  _toggle() {
    if (this.toggler?.classList.contains("active")) {
      this.toggler?.classList.remove("active");
      this.menu?.classList.remove("active");
    } else {
      this.toggler?.classList.add("active");
      this.menu?.classList.add("active");
    }
  }

  _activateOnClickMenu() {
    const links = [...document.querySelectorAll(".nav-menu a")];

    links.forEach((link) =>
      link.addEventListener("click", () => {
        this.toggler?.classList.remove("active");
        this.menu?.classList.remove("active");
      })
    );
  }
}

export default NavbarToggler;
