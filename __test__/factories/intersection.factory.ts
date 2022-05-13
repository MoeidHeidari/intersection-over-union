/**
 * Author Moeid Heidari
 * Date 13 May 2022
 */
import { IOURquestDTO } from '../../src/application/dtos/iou-request.dto'
import { datatype } from "faker"
const intersection = {
    ground_truth_bounding_box: {
        left: datatype.number(2000),
        right: datatype.number(2000),
        top: datatype.number(2000),
        bottom: datatype.number(2000)
    },
    predicted_bounding_box: {
        left: datatype.number(2000),
        right: datatype.number(2000),
        top: datatype.number(2000),
        bottom: datatype.number(2000)
    },
}
export const intersectionWithoutGroundTruthBoundinBox = {
    predicted_bounding_box: {
        left: datatype.number(2000),
        right: datatype.number(2000),
        top: datatype.number(2000),
        bottom: datatype.number(2000)
    },
}
export const intersectionWithoutPredictedBoundingBox = {
    ground_truth_bounding_box: {
        left: datatype.number(2000),
        right: datatype.number(2000),
        top: datatype.number(2000),
        bottom: datatype.number(2000)
    }
}
export const intersectionWithEmptyGroundTruthBoundinBox = {
    ground_truth_bounding_box: {},
    predicted_bounding_box: {
        left: datatype.number(2000),
        right: datatype.number(2000),
        top: datatype.number(2000),
        bottom: datatype.number(2000)
    },
}
export const intersectionWithEmptyPredictedBoundingBox = {
    ground_truth_bounding_box: {
        left: datatype.number(2000),
        right: datatype.number(2000),
        top: datatype.number(2000),
        bottom: datatype.number(2000)
    },
    predicted_bounding_box: {},
}
//============================================================================================
export const aFakeIntersection                  = new IOURquestDTO(intersection);