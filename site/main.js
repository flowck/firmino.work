window.addEventListener("load", function() {
  const easterEggButton = document.querySelector(".easter-egg");
  const body = document.body;

  easterEggButton.addEventListener("click", function() {
    if (easterEggButton.id == "off") {
      body.classList.add("blue-mode");
      easterEggButton.id = "on";
      easterEggButton.innerHTML = "Light mode";
    } else if (easterEggButton.id === "on") {
      body.classList.remove("blue-mode");
      easterEggButton.id = "off";
      easterEggButton.innerHTML = "Blue mode";
    }
  });
});