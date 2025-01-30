const bookCardBlurbs = document.querySelectorAll(".book-card-blurb");
bookCardBlurbs.forEach((blurb) =>
  blurb.addEventListener("click", () =>
    blurb.classList.toggle("shortened-blurb")
  )
);
