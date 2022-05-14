/**
 * Author Moeid Heidari
 * Date 12 May 2022
 */
import { IsDefined, IsNotEmpty } from 'class-validator';

const allowedProperties = ['iou'];
export class IOUResponseDTO {
  /**
   * Calculated IOU result value
   */
  @IsDefined()
  @IsNotEmpty()
  iou: number;
  /**
   * Contructs the DTO based on the provided properties after validation success.
   * @param properties list of allowed properties
   */
  constructor(properties: any = {}) {
    Object.keys(properties).forEach((key: string) => {
      if (allowedProperties.includes(key)) this[key as keyof this] = properties[key];
    });
  }
}
