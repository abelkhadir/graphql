import { displayHome } from "../home/display.js";
import { failureToast, succedToast } from "../notif/toast.js";

const SIGNIN_URL = "https://learn.zone01oujda.ma/api/auth/signin";

const loginTemplate = `
    <form id="login-form" novalidate>
        <img src="/images/logo.png" alt="Logo">
        <p>Welcome, <span>Back!</span></p>
        <div class="input-group">
            <label for="login">Login</label>
            <input id="login" type="text" name="login" required
                   autocomplete="username"
                   placeholder="Type your username or email...">
        </div>
        <div class="input-group">
            <label for="password">Password</label>
            <input id="password" type="password" name="password" required
                   autocomplete="current-password"
                   placeholder="Type your password...">
        </div>
        <button type="submit">Submit</button>
    </form>
`;

export function LoginForm() {
    const container = document.querySelector('.container');
    container.className = 'container login-page';
    container.innerHTML = loginTemplate;

    container.querySelector('#login-form').addEventListener('submit', LoginHandler);
}

export function LogOut() {
    localStorage.removeItem('token');

    const circle = document.querySelector('.circle');
    if (circle) circle.style.display = 'none';

    LoginForm();
}

async function LoginHandler(e) {
    e.preventDefault();

    const form = e.target;
    const login = form.login.value.trim();
    const password = form.password.value;

    form.classList.add('loading');

    try {
        const resp = await fetch(SIGNIN_URL, {
            method: "POST",
            headers: {
                "Authorization": `Basic ${btoa(`${login}:${password}`)}`,
                "Content-Type": "application/json",
            },
        });

        const data = await resp.json();

        if (!resp.ok) {
            failureToast(data.error);
            return;
        }

        localStorage.setItem('token', data);
        succedToast(`Welcome ${login} to your profile`);
        displayHome();
    } catch (err) {
        failureToast(`There was an error, please try later: ${err}`);
    } finally {
        form.classList.remove('loading');
    }
}
