import { LogOut } from "../js/auth/auth.js";
import { failureToast } from "../js/notif/toast.js";

export function VerifyError(data) {
    if (!data) {
        failureToast('Error while fetching data, please try later.')
        return false
    }
    if (data.errors?.[0]?.extensions?.code === 'invalid-jwt') {
        failureToast('Looks like you need to log in again. Catch you later!');
        LogOut()
        return false
    }
    return true
}
