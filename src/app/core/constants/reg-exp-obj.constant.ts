import {IRegExpObjModel} from "../models/reg-exp-obj.model";

export const regExp: IRegExpObjModel = {
  digits: {
    only: /^\d+$/,
    contains: /\d/,
  },
  letters: {
    only: /^[a-zA-Z]+$/,
    contains: /[a-zA-Z]/,
  },
  symbols: {
    only: /^[~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/,
    contains: /[~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
  },
}
