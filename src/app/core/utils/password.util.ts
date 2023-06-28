import {regExp} from "../constants/reg-exp-obj.constant";

export function isEasy(password: string): boolean {
  return hasOnlyLetters(password) || hasOnlyDigits(password) || hasOnlySymbols(password);
}

export function isMedium(password: string): boolean {
  return hasLettersSymbols(password) || hasLettersDigits(password) || hasDigitsSymbols(password);
}

export function isStrong(password: string): boolean {
  return hasLettersSymbols(password) && hasLettersDigits(password) && hasDigitsSymbols(password);
}

export function hasLettersSymbols(password: string): boolean {
  return regExp.letters.contains.test(password) && regExp.symbols.contains.test(password);
}

export function hasLettersDigits(password: string): boolean {
  return regExp.letters.contains.test(password) && regExp.digits.contains.test(password);
}

export function hasDigitsSymbols(password: string): boolean {
  return regExp.digits.contains.test(password) && regExp.symbols.contains.test(password);
}

export function hasOnlyLetters(password: string): boolean {
  return regExp.letters.only.test(password);
}

export function hasOnlyDigits(password: string): boolean {
  return regExp.digits.only.test(password);
}

export function hasOnlySymbols(password: string): boolean {
  return regExp.symbols.only.test(password);
}

export function hasValue(password: string): boolean {
  return !!password;
}

export function hasLength(password: string): boolean {
  return password.length >= 8;
}
