import { HashMap, Translation, TranslocoTranspiler } from "@ngneat/transloco";

export class CustomTranspiler implements TranslocoTranspiler {
  transpile(value: any, params: HashMap<any>, translation: Translation, key: any) {
    console.log({value, params, translation, key})
    return value
  }
}