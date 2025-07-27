// scripts/include.js
document.addEventListener("DOMContentLoaded", function () {
  const includeTargets = document.querySelectorAll("[data-include]");

  includeTargets.forEach((element) => {
    const file = element.getAttribute("data-include");

    fetch(file)
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.status);
        return resp.text();
      })
      .then((html) => {
        element.innerHTML = html;
      })
      .catch((err) => {
        console.error("Include error:", err);
        element.innerHTML = "<p class='text-sm text-red-500'>Failed to load comment form.</p>";
      });
  });
});