import { ENV } from "@/utils";

export class Token {
    setToken(token) {
        localStorage.setItem(ENV.TOKEN, token);
    }

    getToken () {
        return localStorage.getItem(ENV.TOKEN);
    }
}