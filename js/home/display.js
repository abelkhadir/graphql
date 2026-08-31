import { BodyHome } from "./body.js";
import { Header } from "./header.js";

export async function displayHome() {
  // Empty out container
  const container = document.querySelector(".container");
  container.className = "container home-page";
  container.innerHTML = "";

  // Display all
  Header();
  BodyHome();
}
