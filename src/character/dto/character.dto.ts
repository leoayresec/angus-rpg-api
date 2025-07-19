import {
  IsString, IsInt, IsOptional, IsArray, ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { SkillDto } from './character-skill.dto';
import { WeaponDto } from './character-weapon.dto';
import { ArmorDto } from './character-armor.dto';
import { ItemDto } from './character-item.dto';

export class CharacterDto {
  @IsString() nome: string;
  @IsString() jogador: string;
  @IsString() esteriotipo: string;
  @IsInt() idade: number;
  @IsString() descendencia: string;
  @IsInt() altura: number;
  @IsString() sexo: string;
  @IsInt() peso: number;
  @IsString() cabelos: string;
  @IsString() olhos: string;
  @IsString() aparencia_geral: string;

  @IsInt() conhecimento: number;
  @IsInt() habilidade: number;
  @IsInt() vigor: number;
  @IsInt() folego: number;
  @IsInt() fe: number;
  @IsInt() magnetismo: number;
  @IsInt() acao_extra: number;
  @IsInt() peso_maximo: number;
  @IsInt() dano_adicional: number;

  @IsInt() nivel_atual: number;
  @IsInt() pontos_troca_atual: number;
  @IsInt() pontos_troca_necessarios: number;

  @IsInt() moedas_ouro: number;
  @IsInt() moedas_prata: number;
  @IsInt() moedas_cobre: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SkillDto)
  skills?: SkillDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WeaponDto)
  weapons?: WeaponDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ArmorDto)
  armors?: ArmorDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemDto)
  items?: ItemDto[];
}
