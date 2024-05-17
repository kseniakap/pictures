const checkTextInputs = (selector) => {
  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach((input) => {
    input.addEventListener("keypress", function (e) {
      if (e.key.match(/[^а-яё 0-9]/gi)) {
        e.preventDefault();
      }
    });
  });
};

export default checkTextInputs;
//в инпуты возможно ввести только русские буквы и цифры
