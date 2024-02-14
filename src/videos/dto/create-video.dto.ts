import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateVideoDto {
    @ApiProperty()
    id:          number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    titulo:      string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @ApiProperty()
    @IsUrl()
    url:         string;

    @ApiProperty()
    @IsString()
    imagen:      string;
}
