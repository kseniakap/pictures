import modals from "./modules/modals";
import slider from "./modules/slider";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyle from "./modules/showMoreStyle";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import drop from "./modules/drop";
// import scrollingTwo from "./modules/scrolling2";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  modals();
  slider(
    ".feedback-slider-item",
    "horizontal",
    ".main-prev-btn",
    ".main-next-btn"
  );
  slider(".main-slider-item", "vertical");
  forms();
  mask('[name="phone"');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  showMoreStyle(".button-styles", "#styles .row");
  calc("#size", "#material", "#options", ".promocode", ".calc-price");
  filter();
  accordion(".accordion-heading", ".accordion-block");
  pictureSize(".sizes-block");
  burger(".burger-menu", ".burger");
  scrolling(".pageup");
  drop();
  // scrollingTwo(".pageup");
});
