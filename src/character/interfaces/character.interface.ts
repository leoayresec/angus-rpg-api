import { CharacterAttributes } from './attributes.interface';
import { CharacterSkills } from './skills.interface';
import { CharacterHierarchy } from './hierarchy.interface';
import { CharacterFinances } from './finances.interface';

export interface Character {
  nome: string;
  jogador: string;
  esteriotipo: string;
  idade: number;
  descendencia: string;
  altura: number;
  sexo: string;
  peso: number;
  cabelos: string;
  olhos: string;
  aparencia_geral: string;
  attributes: CharacterAttributes[];
  skills: CharacterSkills[];
  hierarchy: CharacterHierarchy[];
  finances: CharacterFinances[];
}
