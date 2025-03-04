const drop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');

  ["dragenter", "dragleave", "dragover", "drop"].forEach((eventName) => {
    fileInputs.forEach((input) => {
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

  ["dragenter", "dragover"].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, () => hightLight(input), false);
    });
  });
  ["dragleave", "drop"].forEach((eventName) => {
    fileInputs.forEach((input) => {
      if (eventName != "drop") {
        input.addEventListener(eventName, () => unhightLight(input), false);
      } else {
        input.addEventListener(eventName, () => addFile(input), false);
      }
    });
  });

  fileInputs.forEach((input) => {
    input.addEventListener("drop", (e) => {
      input.files = e.dataTransfer.files;
      let dots;
      const arr = input.files[0].name.split(".");

      arr[0].length > 6 ? (dots = "...") : (dots = ".");
      const name = arr[0].substring(0, 6) + dots + arr[1];
      input.previousElementSibling.textContent = name;
    });
  });
};

export default drop;
