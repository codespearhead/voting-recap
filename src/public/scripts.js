const childrenBody = document.querySelectorAll("body > *");
childrenBody.forEach((child) =>
  child.classList.add(
    "row",
    "p-3",
    "text-center",
    "justify-content-center",
    "border",
    "border-light"
  )
);
