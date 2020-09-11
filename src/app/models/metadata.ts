
export type langValues = { [lang: string]: string; }

export abstract class Metadata {
  #name: string  //  Имя объекта метаданных на основном языке конфигурации
  #synonims: langValues // Синонимы имени на других языках

  constructor(name: string, syns: langValues) {
    this.#name = name
    this.#synonims = syns
  }

  Synonim(lang: string = 'ru') {
    return this.#synonims[lang]
  }
}