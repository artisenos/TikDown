// Dark/Light Mode Toggle
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
});

// Download Function

// 🎥 تحميل فيديو من السيرفر
const SERVER = "https://your-app.onrender.com"; // بدلها برابطك
function downloadVideo() {
  let user = document.getElementById("url").value;

  if (!user) {
    alert("❌ ضع اسم المستخدم");
    return;
  }

  window.location.href = `${SERVER}/video?user=${encodeURIComponent(user)}`;
}

function downloadMP3() {
  let user = document.getElementById("url").value;

  if (!user) {
    alert("❌ ضع اسم المستخدم");
    return;
  }

  window.location.href = `${SERVER}/mp3?user=${encodeURIComponent(user)}`;
}
// Animation on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});