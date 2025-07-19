import { IsString, IsNumber, IsInt } from 'class-validator';

export class WeaponDto {
  @IsString()
  nome: string;

  @IsString()
  dano: string;

  @IsString()
  tipo: string;

  @IsNumber()
  peso: number;

  @IsInt()
  desgaste: number;

  @IsInt()
  bonus: number;
}
