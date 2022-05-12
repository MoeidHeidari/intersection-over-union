/**
 * Author Moeid Heidari
 * Date 12 May 2022
 */
import { IsDefined, IsNotEmpty, IsNumber } from 'class-validator';
const allowedProperties = ['left', 'right', 'top', 'bottom'];
export class BoundingBoxDTO {
    /**
     * Left coordinate of the bounding box.
     */
    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    left: number;
    /**
     * Right coordinate of the bounding box.
     */
    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    right: number;
    /**
     * Top coordinate of the bounding box.
     */
    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    top: number;
    /**
     * Bottom coordinate of the bounding box.
     */
    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    bottom: number;

    /**
  * get user DTO constructor
  * @param properties DTO properties
  */
    constructor(properties: any = {}) {
        Object.keys(properties).forEach((key: string) => {
            if (allowedProperties.includes(key))
                this[key as keyof this] = properties[key];
        })
    }
}