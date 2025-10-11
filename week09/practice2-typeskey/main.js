const input = document.querySelector("#keyInput");
const log = document.querySelector("#keyLog");

input.addEventListener("keydown", function (event) {
  // สร้าง <p> สำหรับแต่ละ key ที่กด
  const p = document.createElement("p");
  p.textContent = `You pressed: ${event.key}`;

  // ถ้าเป็น Enter ให้ข้อความเป็นสีน้ำเงิน
  if (event.key === "Enter") {
    p.style.color = "blue";
  } else {
    p.style.color = "black";
  }

  // เพิ่ม <p> เข้าใน log
  log.appendChild(p);
});
