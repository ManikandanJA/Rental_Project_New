const USER_KEY = "user";

export function getUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function isLoggedIn() {
  return !!getUser();
}

export function loginUser(name, phone) {
  const user = { name: name.trim(), phone: phone.trim() };
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  return user;
}

export function logoutUser() {
  localStorage.removeItem(USER_KEY);
}
