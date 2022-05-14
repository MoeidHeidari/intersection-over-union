/**
 * Author Moeid Heidari
 * Date 12 May 2022
 */
import { IsDefined, IsNotEmptyObject, ValidateNested } from 'class-validator';
import { BoundingBoxDTO } from './bounding-box.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
/**
 * List of allowed properties in this DTO
 */
const allowedProperties = ['ground_truth_bounding_box', 'predicted_bounding_box'];
/**
 * IOU request DTO
 */
export class IOURquestDTO {
  /**
   * Containes the coordinates of the ground truth bounding box
   */
  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => BoundingBoxDTO)
  @ApiProperty({
    description: 'ground_truth_bounding_box',
  })
  ground_truth_bounding_box: BoundingBoxDTO;

  /**
   * Containes the coordinates of the predicted bounding box
   */
  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => BoundingBoxDTO)
  @ApiProperty({
    description: 'predicted_bounding_box',
  })
  predicted_bounding_box: BoundingBoxDTO;

  /**
   * get user DTO constructor
   * @param properties DTO properties
   */
  constructor(properties: any = {}) {
    Object.keys(properties).forEach((key: string) => {
      if (allowedProperties.includes(key)) this[key as keyof this] = properties[key];
    });
    this.ground_truth_bounding_box = new BoundingBoxDTO(this.ground_truth_bounding_box);
    this.predicted_bounding_box = new BoundingBoxDTO(this.predicted_bounding_box);
  }
}
