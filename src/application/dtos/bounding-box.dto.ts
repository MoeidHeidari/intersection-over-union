/**
 * Author Moeid Heidari
 * Date 12 May 2022
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber } from 'class-validator';
/**
 * List of allowed properties in this DTO
 */
const allowedProperties = ['left', 'right', 'top', 'bottom'];
/**
 * Bounding box DTO
 */
export class BoundingBoxDTO {
  /**
   * Left coordinate of the bounding box.
   */
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'left',
    example: 5,
  })
  left: number;
  /**
   * Right coordinate of the bounding box.
   */
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'right',
    example: 5,
  })
  right: number;
  /**
   * Top coordinate of the bounding box.
   */
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'top',
    example: 5,
  })
  top: number;
  /**
   * Bottom coordinate of the bounding box.
   */
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'bottom',
    example: 5,
  })
  bottom: number;

  /**
   * get user DTO constructor
   * @param properties DTO properties
   */
  constructor(properties: any = {}) {
    Object.keys(properties).forEach((key: string) => {
      if (allowedProperties.includes(key)) this[key as keyof this] = properties[key];
    });
  }
}
