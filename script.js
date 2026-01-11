document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     HERO / SOBRE
  ================================ */
  const openBtn = document.getElementById("openInvitation");
  const hero = document.getElementById("hero");
  const content = document.getElementById("content");
  const music = document.getElementById("music");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      hero.classList.add("fade-out");

      setTimeout(() => {
        hero.style.display = "none";
        content.classList.remove("hidden");
        window.scrollTo(0, 0);
      }, 600);

      if (music) {
        music.volume = 0.3;
        music.play().catch(() => {});
      }
    });
  }

  /* ===============================
     COUNTDOWN
  ================================ */
  const weddingDate = new Date("February 7, 2026 18:30:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) return;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  }, 1000);

});
