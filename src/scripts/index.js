import smoothscroll from "smoothscroll-polyfill";
import sal from "sal.js";

import "./font-awesome-icon";
import "sal.js/dist/sal.css";

import NavigationToggler from "./navbar/navigation-toggler";

(() => {
  smoothscroll.polyfill();

  sal({
    once: true,
  });

  new NavigationToggler({
    toggler: document.querySelector(".navigation-toggler"),
    target: document.querySelector(".navigation-menu"),
  }).activate();
})();
