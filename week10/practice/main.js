document.addEventListener("DOMContentLoaded", () => {
  const bgColorInput = document.getElementById("bgColor");
  const fontColorInput = document.getElementById("fontColor");
  const fontSizeSelect = document.getElementById("fontSize");
  const previewText = document.getElementById("previewText");
  const saveBtn = document.getElementById("saveBtn");
  const resetBtn = document.getElementById("resetBtn");

  const savedBg = localStorage.getItem("bgColor");
  const savedFontColor = localStorage.getItem("fontColor");
  const savedFontSize = localStorage.getItem("fontSize");

  if (savedBg) document.body.style.backgroundColor = savedBg;
  if (savedFontColor) previewText.style.color = savedFontColor;
  if (savedFontSize) {
    applyFontSize(savedFontSize);
    fontSizeSelect.value = savedFontSize;
  }

  saveBtn.addEventListener("click", () => {
    const bgColor = bgColorInput.value;
    const fontColor = fontColorInput.value;
    const fontSize = fontSizeSelect.value;

    localStorage.setItem("bgColor", bgColor);
    localStorage.setItem("fontColor", fontColor);
    localStorage.setItem("fontSize", fontSize);

    document.body.style.backgroundColor = bgColor;
    previewText.style.color = fontColor;
    applyFontSize(fontSize);
  });

  resetBtn.addEventListener("click", () => {
    localStorage.clear();
    document.body.style.backgroundColor = "#0b0b1a";
    previewText.style.color = "#fff";
    applyFontSize("medium");
    fontSizeSelect.value = "medium";
  });

  function applyFontSize(size) {
    switch (size) {
      case "small":
        previewText.style.fontSize = "14px";
        break;
      case "medium":
        previewText.style.fontSize = "20px";
        break;
      case "large":
        previewText.style.fontSize = "28px";
        break;
    }
  }
});
