/**
 * Author Moeid Heidari
 * Date 12 May 2022
 */
import { IsDefined,ValidateNested} from 'class-validator';
import { BoundingBoxDTO } from './bounding-box.dto';
const allowedProperties = ['ground_truth_bounding_box', 'predicted_bounding_box'];
export class IOURquestDTO {
    /**
     * Containes the coordinates of the ground truth bounding box 
     */
    @IsDefined()
    @ValidateNested()
    ground_truth_bounding_box: BoundingBoxDTO;

    /**
     * Containes the coordinates of the predicted bounding box
     */
     @IsDefined()
     @ValidateNested()
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
    }
}