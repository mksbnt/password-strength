import {COLOR} from "../enums/color.enum";
import {hasLength, hasValue, isEasy, isMedium, isStrong} from "./password.util";
import {PASSWORD_COMPLEXITY} from "../enums/password-complexity.enum";

export const getEasyColor = (password: string): COLOR => {
  if (!hasValue(password)) {
    return COLOR.GRAY;
  }

  if (!hasLength(password) || isEasy(password)) {
    return COLOR.RED;
  }

  if (isMedium(password)) {
    return isStrong(password) ? COLOR.GREEN : COLOR.YELLOW;
  }

  return COLOR.GRAY;
};

export const getMediumColor = (password: string): COLOR => {
  if (!hasValue(password)) {
    return isEasy(password) ? COLOR.GRAY : COLOR.GRAY;
  }

  if (!hasLength(password)) {
    return COLOR.RED;
  }

  if (isStrong(password)) {
    return COLOR.GREEN;
  }

  if (isMedium(password)) {
    return COLOR.YELLOW;
  }

  return COLOR.GRAY;
};

export const getStrongColor = (password: string): COLOR => {
  if (!hasValue(password)) {
    return isEasy(password) || isMedium(password) ? COLOR.GRAY : COLOR.GRAY;
  }

  if (!hasLength(password)) {
    return COLOR.RED;
  }

  if (isStrong(password)) {
    return COLOR.GREEN;
  }

  return COLOR.GRAY;
};

export const getColor = (complexity: PASSWORD_COMPLEXITY, password: string,): COLOR => {
  switch (complexity) {
    case PASSWORD_COMPLEXITY.EASY:
      return getEasyColor(password);
    case PASSWORD_COMPLEXITY.MEDIUM:
      return getMediumColor(password);
    case PASSWORD_COMPLEXITY.STRONG:
      return getStrongColor(password);
  }
};


