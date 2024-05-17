//1 Вариант - через классы, не забудь заглянуть в css

const accordion = (triggerSelector, itemsSelector) => {
  const btns = document.querySelectorAll(triggerSelector),
    blocks = document.querySelectorAll(itemsSelector);

  blocks.forEach((block) => {
    block.classList.add("animated", "fadeInDown");
  });
  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        btns.forEach((btn) => {
          btn.classList.remove("active", "active-style");
        });
        this.classList.add("active", "active-style");
      }
    });
  });
};
export default accordion;

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
