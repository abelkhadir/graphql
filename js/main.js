import { LoginForm } from "./auth/auth.js";
import { displayHome } from "./home/display.js";
import { GetInfo } from "./home/header.js";
import { queries } from "./gql/queries.js";

window.history.pushState(null, "", "/")

async function init() {
    const token = localStorage.getItem("token")
    if (!token) {
        LoginForm()
        return
    }

    const data = await GetInfo(queries.user)
    const isValid = data?.data?.user?.length > 0

    if (isValid) {
        displayHome()
    } else {
        localStorage.removeItem("token")
        LoginForm()
    }
}

init()
