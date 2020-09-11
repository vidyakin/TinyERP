import { Metadata, langValues } from './metadata'

/**
 * Класс СПРАВОЧНИК
 */
export abstract class Catalog extends Metadata {
  
  protected constructor(name: string, synonims: langValues) {
    super(name, synonims);
  }
}