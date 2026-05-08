const root = document.getElementById("root");
if (root) {
  root.innerHTML = window.Page();

  const urls = ["./assets/avatar.png", "./assets/avatar-variant.png"];
  const buttonLabels = ["Показать другое фото", "Показать первое фото"];
  const img = document.getElementById("hero-avatar-img");
  const btn = document.getElementById("hero-photo-toggle");

  if (img && btn) {
    let index = 0;
    btn.addEventListener("click", () => {
      index = index === 0 ? 1 : 0;
      img.src = urls[index];
      btn.textContent = buttonLabels[index];
    });
  }
}
