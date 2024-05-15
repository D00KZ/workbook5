"Use Strict";

let imageFiles = [
  { id: "1", path: "https://placehold.co/300x300", description: "placeholder 1" },
  { id: "2", path: "https://placehold.co/300x300", description: "placeholder 2" },
  { id: "3", path: "https://placehold.co/300x300", description: "placeholder 3" },
  { id: "4", path: "https://placehold.co/300x300", description: "placeholder 4" },
  { id: "5", path: "https://placehold.co/300x300", description: "placeholder 5" },
  { id: "6", path: "https://placehold.co/300x300", description: "placeholder 6" },
  { id: "7", path: "https://placehold.co/300x300", description: "placeholder 7" },
  { id: "8", path: "https://placehold.co/300x300", description: "placeholder 8" },
  { id: "9", path: "https://placehold.co/300x300", description: "placeholder 9" },
  { id: "10", path: "https://placehold.co/300x300", description: "placeholder 10" },
];

window.onload = function () {
  loadOptions();

  function loadOptions() {
    const displayDropdown = document.querySelector("#displayDropdown");

    for (const imageFile of imageFiles) {
      const option = document.createElement("option");
      option.value = imageFile.id;
      option.innerText = imageFile.id; //optional
      displayDropdown.appendChild(option);
    }
  }

  function displayImageOptions() {
    const displayDropdown = document.querySelector("#displayDropdown").value;
    const selectedImage = imageFiles.find((image) => image.id === displayDropdown);

    if (selectedImage) {
      const imageDisplay = document.querySelector("#imageDisplay");
      //   imageDisplay.innerHTML = `<img src="${selectedImage.path}" alt="${selectedImage.description}" />`;
      let image = document.createElement("img");
      image.src = selectedImage.path;
      image.alt = selectedImage.description;
      image.classList.add("image");
      //append the child into the parent(put into inside)
      imageDisplay.appendChild(image);
    }
  }

  const displayDropdownButton = document.querySelector("#displayDropdownButton");
//   displayDropdownButton.addEventListener("click", displayImageOptions);
  displayDropdownButton.onclick = displayImageOptions

  function clearDisplayFunction() {
    const imageDisplay = document.querySelector("#imageDisplay");

    imageDisplay.innerHTML = "";
  }
  const clearDisplay = document.querySelector("#clearDisplay");
  clearDisplay.addEventListener("click", clearDisplayFunction);
};
