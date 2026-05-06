import { displayHome } from "../home/display.js";
import { failureToast, succedToast } from "../notif/toast.js";

export function LoginForm() {
    const link = document.getElementById('css-link')
    if (link) {
        link.href = "/css/login.css"
    }
    const container = document.querySelector('.container')
    container.style.cssText = `
        display:flex;
        justify-content:center;
        align-items:center;
    `
    container.innerHTML = `
        <form id="login-form">
            <img src="/images/logo.png">
            <p>Welcome, <span>Back!</span></p>
            <div>
                <label for="login">Login: </label>
                <input type="text" name="login" required placeholder="Type your username or email...">
            </div>
           <div>
                <label for="password">Password: </label>
                <input type="password" name="password" placeholder="Type your password..." required>
           </div>
            <button>Submit</button>
        </form>
    `
    document.getElementById('login-form').addEventListener('submit', LoginHandler)
}

export function LogOut() {
    localStorage.removeItem('token')
    const circle = document.querySelector('.circle')
    circle.style.display = 'none'
    LoginForm()
}

async function LoginHandler(e) {
    e.preventDefault()
    const login = e.target.login.value
    const password = e.target.password.value
    try {
        const resp = await fetch("https://learn.zone01oujda.ma/api/auth/signin", {
            method: "POST",
            headers: {
                "Authorization": `Basic ${btoa(`${login}:${password}`)}`,
                "Content-Type": "application/json"
            }
        })
        const token = await resp.json()
        if (!resp.ok) {
            failureToast(token.error)
        } else {
            localStorage.setItem('token', token)
            succedToast(`Welcome ${login} to your profile`)
            displayHome()
        }
    } catch (err) {
        failureToast(`There was an error, please try later: ${err}`)
    }
}
