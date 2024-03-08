const hamburger = document.querySelector(".hamburger");
const mobileNavItems = document.querySelector(".mobile.nav-items");

hamburger.addEventListener("click", () => {
  if (hamburger.dataset.navigation === "off") {
    hamburger.innerHTML = HAMBURGER_ICON.on;
    hamburger.dataset.navigation = "on";
    mobileNavItems.classList.add("open");
  } else if (hamburger.dataset.navigation === "on") {
    hamburger.innerHTML = HAMBURGER_ICON.off;
    hamburger.dataset.navigation = "off";
    mobileNavItems.classList.remove("open");
  }
});

const HAMBURGER_ICON = {
  on: `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
    <g fill="#2D314D" fill-rule="evenodd">
        <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
        <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
    </g>
    </svg>
    `,
  off: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11">
    <g fill="#2D314D" fill-rule="evenodd">
        <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
    </g>
    </svg>
    `,
};
