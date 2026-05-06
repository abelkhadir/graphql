import { BodyHome } from "./body.js";
import { Header } from "./header.js";

export async function displayHome() {
  const link = document.getElementById("css-link");
  if (link) {
    link.href = "/css/home.css";
  }
  const container = document.querySelector(".container");

  container.removeAttribute("style");
  container.innerHTML = "";
  Header();
  BodyHome();
}
