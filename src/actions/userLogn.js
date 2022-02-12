import { SUCCESS_LOGIN, FAILED_LOGIN } from "./constants";

export function successLogin(payload) {
  return { type: SUCCESS_LOGIN, payload };
}

export function failedLogin() {
    return { type: FAILED_LOGIN};
  }
