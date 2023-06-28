export interface IRegExpObjModel {
  digits:IRegExpFieldModel,
  letters:IRegExpFieldModel,
  symbols:IRegExpFieldModel,
}

interface IRegExpFieldModel {
  only: RegExp,
  contains: RegExp,
}
