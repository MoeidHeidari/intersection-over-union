/**
 * Author Moeid Heidari
 * Date 12 May 2022
 */
import { IsDefined,IsNotEmptyObject,ValidateNested} from 'class-validator';
import { BoundingBoxDTO } from './bounding-box.dto';
import { Type } from 'class-transformer';
const allowedProperties = ['ground_truth_bounding_box', 'predicted_bounding_box'];
export class IOURquestDTO {
    /**
     * Containes the coordinates of the ground truth bounding box 
     */
    @IsDefined()
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => BoundingBoxDTO)
    ground_truth_bounding_box: BoundingBoxDTO;

    /**
     * Containes the coordinates of the predicted bounding box
     */
     @IsDefined()
     @IsNotEmptyObject()
     @ValidateNested()
     @Type(() => BoundingBoxDTO)
     predicted_bounding_box: BoundingBoxDTO;

    /**
  * get user DTO constructor
  * @param properties DTO properties
  */
    constructor(properties: any = {}) {
        Object.keys(properties).forEach((key: string) => {
            if (allowedProperties.includes(key))
                this[key as keyof this] = properties[key];
        })
        this.ground_truth_bounding_box=new BoundingBoxDTO(this.ground_truth_bounding_box);
        this.predicted_bounding_box=new BoundingBoxDTO(this.predicted_bounding_box);
    }
}