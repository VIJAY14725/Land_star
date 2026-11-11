(function () {
  var layout = document.querySelector("[data-property-layout]");
  var buttons = document.querySelectorAll("[data-property-layout-choice]");

  if (!layout || !buttons.length) {
    return;
  }

  function updateSeeMoreButtons() {
    var updates = [];

    document.querySelectorAll(".sale-section .blog-entry .text > p, .lease-section .lease-property .text > p, #closed-page .closed-property .text > p").forEach(function (description) {
      var toggle = description.nextElementSibling;
      if (!toggle || !toggle.matches(".sale-see-more, .lease-see-more, .closed-see-more")) {
        return;
      }

      updates.push({
        toggle: toggle,
        hidden: toggle.getAttribute("aria-expanded") !== "true" &&
          description.scrollHeight <= description.clientHeight + 1
      });
    });

    updates.forEach(function (update) {
      update.toggle.hidden = update.hidden;
    });
  }

  function selectLayout(value) {
    if (layout.getAttribute("data-property-layout") === value) {
      return;
    }

    layout.setAttribute("data-property-layout", value);
    layout.classList.add("has-layout-switch");

    buttons.forEach(function (button) {
      var selected = button.getAttribute("data-property-layout-choice") === value;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });

    window.requestAnimationFrame(updateSeeMoreButtons);
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      selectLayout(button.getAttribute("data-property-layout-choice"));
    });
  });

  window.addEventListener("resize", updateSeeMoreButtons);
  updateSeeMoreButtons();
}());
