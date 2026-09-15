document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".hero-whatsapp-cta, .real-cta").forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "CompleteRegistration");
    }
  });
});
