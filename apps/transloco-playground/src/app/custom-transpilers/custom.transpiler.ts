import { HashMap, Translation, TranslocoTranspiler, TRANSLOCO_TRANSPILER } from "@ngneat/transloco";

export class CustomTranspiler implements TranslocoTranspiler {
  private _keyReplacer = 'SUFFIX';
  transpile(value: any, params: HashMap<any>, translation: Translation, key: any) {
    const newKey = `${key}.${this._keyReplacer}`;
    if (translation[newKey]) {
      return translation[newKey]
    }
    return value
  }
}

export const customTranspiler = {
  provide: TRANSLOCO_TRANSPILER,
  useClass: CustomTranspiler
}