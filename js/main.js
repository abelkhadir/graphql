import { LoginForm } from "./auth/auth.js";
import { displayHome } from "./home/display.js";

window.history.pushState(null, "", "/")

if (localStorage.getItem("token")) {
    displayHome()
} else {
    LoginForm()
}
