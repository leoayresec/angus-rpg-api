import { IsString, IsInt } from 'class-validator';

export class SkillDto {
  @IsString()
  nome: string;

  @IsInt()
  nivel_especializacao: number;

  @IsInt()
  valor_teste: number;
}
