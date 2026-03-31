// Dark/Light Mode Toggle
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
});

// Download Function

// 🌐 رابط السيرفر تاعك (Render)
const SERVER = "https://tikdown-os6v.onrender.com";

// عناصر الصفحة
const urlInput = document.getElementById("url");
const videoBtn = document.getElementById("videoBtn");
const audioBtn = document.getElementById("audioBtn");

// 🎥 تحميل فيديو
videoBtn.addEventListener("click", () => {
  const url = urlInput.value.trim();

  if (!url) {
    alert("❌ ضع رابط فيديو TikTok");
    return;
  }

  // تحويل مباشر للتحميل
  window.location.href = `${SERVER}/download/video?url=${encodeURIComponent(url)}`;
});


// 🎵 تحميل MP3
audioBtn.addEventListener("click", () => {
  const url = urlInput.value.trim();

  if (!url) {
    alert("❌ ضع رابط فيديو TikTok");
    return;
  }

  // تحميل الصوت
  window.location.href = `${SERVER}/download/mp3?url=${encodeURIComponent(url)}`;
});

// Animation on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});