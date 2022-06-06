import { HashMap, Translation, TranslocoTranspiler, TRANSLOCO_TRANSPILER } from "@ngneat/transloco";

export class CustomTranspiler implements TranslocoTranspiler {
  transpile(value: any, params: HashMap<any>, translation: Translation, key: any) {
    console.log('test', {value, params, translation, key})
    return value
  }
}

export const customTranspiler = {
  provide: TRANSLOCO_TRANSPILER,
  useClass: CustomTranspiler
}