/* eslint-disable no-useless-escape */
export function validateEmail(email) {
  // const mailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})$/;
  const mailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
  return mailRegExp.test(email);
}

export function validatePassword(password) {
  // Min 6 max 20 in length, one uppercase, one lowercase, one digit
  const passwordRegExpr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;
  return passwordRegExpr.test(password);
}

export function validatePhone(phone) {
  const phoneRegExpr = /^\+?(38)?(\d{12})$/;
  return phoneRegExpr.test(phone);
}

export const validateName = (val) => (val.length < 5 ? false : true);

export const errMessage = {
  longer: "Should be more 6 characters",
  valid: "Enter valid e-mail",
  format: "Enter phone in format +380971231212",
  password: "Min 6 chars: 1 lowercase, 1 uppercase and one number",
  re_password: "Passwords do not match",
};
