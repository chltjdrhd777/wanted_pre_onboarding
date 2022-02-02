export function emailValidator(email) {
  let regex = /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]/;

  return regex.test(email);
}

export function passwordValidator(prevPass, nextPass) {
  if (prevPass !== nextPass) return false;

  return true;
}
