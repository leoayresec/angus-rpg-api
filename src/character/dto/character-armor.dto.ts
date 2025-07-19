import { IsString, IsInt, IsNumber } from 'class-validator';

export class ArmorDto {
  @IsString()
  nome: string;

  @IsInt()
  defesa: number;

  @IsString()
  tipo: string;

  @IsNumber()
  peso: number;

  @IsInt()
  desgaste: number;

  @IsInt()
  bonus: number;
}
