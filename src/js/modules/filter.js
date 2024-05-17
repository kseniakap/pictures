const filter = () => {
  const menu = document.querySelector(".portfolio-menu"),
    items = menu.querySelectorAll("li"),
    btnAll = menu.querySelector(".all"),
    btnLovers = menu.querySelector(".lovers"),
    btnChef = menu.querySelector(".chef"),
    btnGirl = menu.querySelector(".girl"),
    btnGuy = menu.querySelector(".guy"),
    btnGrandmother = menu.querySelector(".grandmother"),
    btnGranddad = menu.querySelector(".granddad"),
    wrapper = document.querySelector(".portfolio-wrapper"),
    markAll = wrapper.querySelectorAll(".all"),
    markGirl = wrapper.querySelectorAll(".girl"),
    markLovers = wrapper.querySelectorAll(".lovers"),
    markChef = wrapper.querySelectorAll(".chef"),
    markGuy = wrapper.querySelectorAll(".guy"),
    no = document.querySelector(".portfolio-no");

  const typeFilter = (markType) => {
    markAll.forEach((item) => {
      item.style.display = "none";
      item.classList.remove("animated", "fadeIn");
    });
    no.style.display = "none";
    no.classList.remove("animated", "fadeIn");

    if (markType) {
      markType.forEach((mark) => {
        mark.style.display = "block";
        mark.classList.remove("animated", "fadeIn");
      });
    } else {
      no.style.display = "block";
      no.classList.remove("animated", "fadeIn");
    }
  };
  function setEventForElement(elem, content) {
    elem.addEventListener("click", () => {
      typeFilter(content);
    });
  }
  setEventForElement(btnAll, markAll);
  setEventForElement(btnLovers, markLovers);
  setEventForElement(btnChef, markChef);
  setEventForElement(btnGuy, markGuy);
  setEventForElement(btnGirl, markGirl);
  setEventForElement(btnGrandmother, "");
  setEventForElement(btnGranddad, "");

  menu.addEventListener("click", (e) => {
    let target = e.target;
    if (target && target.tagName == "LI") {
      items.forEach((btn) => btn.classList.remove("active"));
      target.classList.add("active");
    }
  });
};
export default filter;
