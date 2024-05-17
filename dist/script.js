/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//1 Вариант - через классы, не забудь заглянуть в css

const accordion = (triggerSelector, itemsSelector) => {
  const btns = document.querySelectorAll(triggerSelector),
    blocks = document.querySelectorAll(itemsSelector);
  blocks.forEach(block => {
    block.classList.add("animated", "fadeInDown");
  });
  btns.forEach(btn => {
    btn.addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        btns.forEach(btn => {
          btn.classList.remove("active", "active-style");
        });
        this.classList.add("active", "active-style");
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

//2 Вариант - изменяем высоту блоков

// const accordion = (triggerSelector) => {
//   const btns = document.querySelectorAll(triggerSelector);

//   btns.forEach((btn) => {
//     btn.addEventListener("click", function () {
//       this.classList.toggle("active-style");
//       this.nextElementSibling.classList.toggle("active-content");
//       //активность хэдера
//       if (this.classList.contains("active-style")) {
//         this.nextElementSibling.style.maxHeight =
//           this.nextElementSibling.scrollHeight + 80 + "px";

//       } else {
//         this.nextElementSibling.style.maxHeight = "0px";

//       }
//     });
//   });
// };
// export default accordion;

// const accordion = (triggerSelector) => {
//   const btns = document.querySelectorAll(triggerSelector);

//   btns.forEach((item) => {
//     item.addEventListener("click", function () {
//       if (!this.classList.contains("active-style")) {
//         btns.forEach((item) => {
//           item.classList.remove("active-style");
//           this.nextElementSibling.classList.remove("active-content");
//         });
//       }
//       this.classList.add("active-style");
//       this.nextElementSibling.classList.add("active-content");
//     });
//   });
// };
// export default accordion;

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const burger = (menuSelector, burgerSelector) => {
  const menu = document.querySelector(menuSelector),
    burger = document.querySelector(burgerSelector);
  menu.style.display = "none";
  burger.addEventListener("click", () => {
    if (menu.style.display == "none" && window.screen.availWidth < 993) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
  window.addEventListener("resize", () => {
    if (window.screen.availWidth > 992) {
      menu.style.display = "none";
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const calc = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promocodeBlock = document.querySelector(promocode),
    resultBlock = document.querySelector(result);
  let sum = 0;
  const calcFunc = () => {
    sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);
    if (sizeBlock.value == "" || materialBlock.value == "") {
      resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
    } else if (promocodeBlock.value === "IWANTPOPART") {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };
  sizeBlock.addEventListener("change", calcFunc);
  materialBlock.addEventListener("change", calcFunc);
  optionsBlock.addEventListener("change", calcFunc);
  promocodeBlock.addEventListener("input", calcFunc);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(input => {
    input.addEventListener("keypress", function (e) {
      if (e.key.match(/[^а-яё 0-9]/gi)) {
        e.preventDefault();
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTextInputs);
//в инпуты возможно ввести только русские буквы и цифры

/***/ }),

/***/ "./src/js/modules/drop.js":
/*!********************************!*\
  !*** ./src/js/modules/drop.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const drop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');
  ["dragenter", "dragleave", "dragover", "drop"].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  function hightLight(item) {
    item.closest(".file_upload").style.border = "1px black solid";
    item.closest(".file_upload").style.background = "rgba(0,0,0,0.2)";
  }
  function unhightLight(item) {
    item.closest(".file_upload").style.border = "none";
    item.closest(".file_upload").style.background = "white";
  }
  function addFile(item) {
    if (item.closest(".calc_form")) {
      item.closest(".file_upload").style.background = "white";
    } else {
      item.closest(".file_upload").style.background = "#ededed";
    }
    item.closest(".file_upload").style.border = "none";
  }
  ["dragenter", "dragover"].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => hightLight(input), false);
    });
  });
  ["dragleave", "drop"].forEach(eventName => {
    fileInputs.forEach(input => {
      if (eventName != "drop") {
        input.addEventListener(eventName, () => unhightLight(input), false);
      } else {
        input.addEventListener(eventName, () => addFile(input), false);
      }
    });
  });
  fileInputs.forEach(input => {
    input.addEventListener("drop", e => {
      input.files = e.dataTransfer.files;
      let dots;
      const arr = input.files[0].name.split(".");
      arr[0].length > 6 ? dots = "..." : dots = ".";
      const name = arr[0].substring(0, 6) + dots + arr[1];
      input.previousElementSibling.textContent = name;
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drop);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  const typeFilter = markType => {
    markAll.forEach(item => {
      item.style.display = "none";
      item.classList.remove("animated", "fadeIn");
    });
    no.style.display = "none";
    no.classList.remove("animated", "fadeIn");
    if (markType) {
      markType.forEach(mark => {
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
  menu.addEventListener("click", e => {
    let target = e.target;
    if (target && target.tagName == "LI") {
      items.forEach(btn => btn.classList.remove("active"));
      target.classList.add("active");
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");
// import checkNumInputs from "./checkNumInputs";

//деструктиризация
const forms = () => {
  const form = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    upload = document.querySelectorAll('[name = "upload"]');

  // checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
    spinner: "assets/img/spinner.gif",
    ok: "assets/img/ok.png",
    fail: "assets/img/fail.png"
  };
  const path = {
    designer: "assets/server.php",
    question: "assets/question.php"
  };
  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = "";
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = "Файл не выбран";
    });
  };
  upload.forEach(item => {
    item.addEventListener("input", () => {
      console.log(item.files[0]);

      //jfhdjgh.jpg => ['jfhdjgh','jpg'], потом обращаемся к первому элементу массива[0]
      const arr = item.files[0].name.split(".");
      let dots;
      arr[0].length > 6 ? dots = "..." : dots = ".";
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });
  form.forEach(item => {
    item.addEventListener("submit", e => {
      e.preventDefault();
      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.parentNode.appendChild(statusMessage);
      item.classList.add("animated", "fadeOutUp");
      setTimeout(() => {
        item.style.display = "none";
      }, 400);
      let statusImg = document.createElement("img");
      statusImg.setAttribute("src", message.spinner);
      statusImg.classList.add("animated", "fadeInUp");
      statusMessage.appendChild(statusImg);
      let textMessage = document.createElement("div");
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(item);
      let api;
      item.closest(".popup-design") || item.classList.contains("calc_form") ? api = path.designer : api = path.question;
      //ищет ближайшего предка, который соответствует CSS-селектору. Сам элемент также включается в поиск.
      console.log(api);
      (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.postData)(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute("src", message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        textMessage.textContent = message.failure;
        statusImg.setAttribute("src", message.fail);
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
          item.style.display = "block";
          item.classList.remove("fadeOutUp");
          item.classList.add("fadeInUp");
        }, 5000);
      });
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };
  function createMask(event) {
    let matrix = "+7 (___) ___ __ __",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });
    if (event.type === "blur") {
      if (this.value.length == 2) {
        this.value = "";
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener("input", createMask);
    input.addEventListener("focus", createMask);
    input.addEventListener("blur", createMask);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modals = () => {
  let btnPressed = false;
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    let destroy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]"),
      scroll = calcScroll();
    trigger.forEach(item => {
      item.addEventListener("click", e => {
        if (e.target) {
          e.preventDefault();
        }
        btnPressed = true;
        if (destroy) {
          item.remove();
        }
        windows.forEach(item => {
          item.style.display = "none";
          item.classList.add("animated", "fadeIn");
        });
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });
    close.addEventListener("click", () => {
      windows.forEach(item => {
        item.style.display = "none";
      });
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });
    modal.addEventListener("click", e => {
      if (e.target === modal) {
        windows.forEach(item => {
          item.style.display = "none";
        });
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    });
  }
  function showModalByTime(selector, time) {
    setTimeout(function () {
      let display;
      document.querySelectorAll("[data-modal]").forEach(item => {
        if (getComputedStyle(item).display !== "none") {
          display = "block";
        }
      });
      if (!display) {
        document.querySelector(selector).style.display = "block";
        document.body.style.overflow = "hidden";
        let scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  }
  // function calcScroll() {
  //   const paddingOffset = window.innerWidth - document.body.offsetWidth + "px";
  //   return paddingOffset;
  // }
  //функция для расчета ширины скролла (в таком случае не будет скачков при открытии модалки)
  function calcScroll() {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  function openByScroll(selector) {
    window.addEventListener("scroll", () => {
      if (!btnPressed && window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
        document.querySelector(selector).click();
      }
    });
  }
  bindModal(".button-design", ".popup-design", ".popup-design .popup-close");
  bindModal(".button-consultation ", ".popup-consultation", ".popup-consultation  .popup-close");
  bindModal(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true);
  openByScroll(".fixed-gift");
  showModalByTime(".popup-consultation", 60000);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pictureSize = imgSelector => {
  const blocks = document.querySelectorAll(imgSelector);
  function showImg(block) {
    const img = block.querySelector("img");
    //something.png => something-1.png
    img.src = img.src.slice(0, -4) + "-1.png";
    block.querySelectorAll("p:not(.sizes-hit").forEach(p => {
      p.style.display = "none";
    });
  }
  function hideImg(block) {
    const img = block.querySelector("img");
    //something-1.png => something.png
    img.src = img.src.slice(0, -6) + ".png";
    block.querySelectorAll("p:not(.sizes-hit").forEach(p => {
      p.style.display = "block";
    });
  }
  blocks.forEach(block => {
    block.addEventListener("mouseover", () => {
      showImg(block);
    });
    block.addEventListener("mouseout", () => {
      hideImg(block);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pictureSize);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add("animated", "fadeIn");
      upElem.classList.remove("fadeOut");
    } else {
      upElem.classList.add("fadeOut");
      upElem.classList.remove("fadeIn");
    }
  });
  const element = document.documentElement,
    body = document.body;
  const calcScroll = () => {
    upElem.addEventListener("click", function (event) {
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);
      if (this.hash !== "") {
        event.preventDefault();
        let hashElement = document.querySelector(this.hash),
          hashElementTop = 0;
        while (hashElement.offsetParent) {
          hashElementTop += hashElement.offsetTop;
          hashElement = hashElement.offsetParent;
        }
        hashElementTop = Math.round(hashElementTop);
        smoothScroll(scrollTop, hashElementTop, this.hash);
      }
    });
  };
  const smoothScroll = (from, to, hash) => {
    let timeInterval = 1,
      prevScrollTop,
      speed;
    if (to > from) {
      speed = 30;
    } else {
      speed = -30;
    }
    let move = setInterval(function () {
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);
      if (prevScrollTop === scrollTop || to > from && scrollTop >= to || to < from && scrollTop <= to) {
        clearInterval(move);
        history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, "") + hash);
      } else {
        body.scrollTop += speed;
        element.scrollTop += speed;
        prevScrollTop = scrollTop;
      }
    }, timeInterval);
  };
  calcScroll();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrolling);

/***/ }),

/***/ "./src/js/modules/showMoreStyle.js":
/*!*****************************************!*\
  !*** ./src/js/modules/showMoreStyle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

const showMoreStyle = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);
  btn.addEventListener("click", function () {
    (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.getResourse)("http://localhost:3000/styles").then(res => createCards(res)).catch(error => console.log(error));
    this.remove();
  });
  function createCards(response) {
    response.forEach(_ref => {
      let {
        src,
        title,
        link
      } = _ref;
      let card = document.createElement("div");
      card.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1", "animated", "fadeInUp");
      card.innerHTML = `
					<div class='styles-block'>
						<img src=${src} alt="style">
						<h4>${title}</h4>
						<a href=${link}>Подробнее</a>
					</div>
      `;
      document.querySelector(wrapper).appendChild(card);
    });
  }
  //   cards.forEach((item) => {
  //     item.classList.add("animated", "fadeInUp");
  //   });
  //   btn.addEventListener("click", () => {
  //     cards.forEach((item) => {
  //       item.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
  //       item.classList.add(
  //         "col-sm-3",
  //         "col-sm-offset-0",
  //         "col-xs-10",
  //         "col-xs-offset-1"
  //       );
  //       btn.style.display = "none";
  //     });
  //   });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMoreStyle);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const slider = (slides, direction, prevArrow, nextArrow) => {
  let slideIndex = 1,
    paused = false;
  //при наведение на слайдер, автоматическое переключение слайдов останавливливается
  const allSlides = document.querySelectorAll(slides);
  function showSlides(n) {
    if (n > allSlides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = allSlides.length;
    }
    allSlides.forEach(item => {
      item.classList.add("animated");
      item.style.display = "none";
    });
    allSlides[slideIndex - 1].style.display = "block";
  }
  showSlides(slideIndex);
  function changeNumSlides(n) {
    showSlides(slideIndex += n);
  }

  //Рассмотрен способ, если кнопки на слайдере не потребуются
  try {
    const prevBtn = document.querySelector(prevArrow),
      nextBtn = document.querySelector(nextArrow);
    prevBtn.addEventListener("click", () => {
      changeNumSlides(-1);
      allSlides[slideIndex - 1].classList.add("slideInLeft");
      //классы взяты из animate.css
      allSlides[slideIndex - 1].classList.remove("slideInRight");
    });
    nextBtn.addEventListener("click", () => {
      changeNumSlides(1);
      allSlides[slideIndex - 1].classList.remove("slideInLeft");
      allSlides[slideIndex - 1].classList.add("slideInRight");
    });
  } catch (e) {}
  function activateAnimation() {
    if (direction == "vertical") {
      paused = setInterval(function () {
        changeNumSlides(1);
        allSlides[slideIndex - 1].classList.add("slideInDown");
      }, 3000);
    } else {
      paused = setInterval(function () {
        changeNumSlides(1);
        allSlides[slideIndex - 1].classList.remove("slideInLeft");
        allSlides[slideIndex - 1].classList.add("slideInRight");
      }, 3000);
    }
  }
  activateAnimation();
  allSlides[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(paused);
  });
  allSlides[0].parentNode.addEventListener("mouseleave", () => {
    activateAnimation();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResourse": () => (/* binding */ getResourse),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  return await res.text();
};
const getResourse = async url => {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyle */ "./src/js/modules/showMoreStyle.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");
/* harmony import */ var _modules_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/drop */ "./src/js/modules/drop.js");













// import scrollingTwo from "./modules/scrolling2";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])(".main-slider-item", "vertical");
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  (0,_modules_showMoreStyle__WEBPACK_IMPORTED_MODULE_5__["default"])(".button-styles", "#styles .row");
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])("#size", "#material", "#options", ".promocode", ".calc-price");
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_9__["default"])(".accordion-heading", ".accordion-block");
  (0,_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])(".sizes-block");
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_10__["default"])(".burger-menu", ".burger");
  (0,_modules_scrolling__WEBPACK_IMPORTED_MODULE_11__["default"])(".pageup");
  (0,_modules_drop__WEBPACK_IMPORTED_MODULE_12__["default"])();
  // scrollingTwo(".pageup");
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map