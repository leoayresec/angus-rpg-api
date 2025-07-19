import { IsString, IsInt } from 'class-validator';

export class ItemDto {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;

  @IsInt()
  quantidade: number;
}
