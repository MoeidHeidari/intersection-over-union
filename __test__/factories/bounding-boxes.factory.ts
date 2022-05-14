/**
 * Author Moeid Heidari
 * Date 13 May 2022
 */
import { datatype } from 'faker';
import { BoundingBoxDTO } from '../../src/application/dtos/bounding-box.dto';
/**
 * A bounding box with all necessary data in right format
 */
const fakeBoundingBox = {
  left: datatype.number(2000),
  right: datatype.number(2000),
  top: datatype.number(2000),
  bottom: datatype.number(2000),
};
/**
 * A bounding box without left coordinate
 */
export const fakeBoundingWithoutLeft = {
  right: datatype.number(2000),
  top: datatype.number(2000),
  bottom: datatype.number(2000),
};
/**
 * A bounding box without right coordinate
 */
export const fakeBoundingWithoutRight = {
  left: datatype.number(2000),
  top: datatype.number(2000),
  bottom: datatype.number(2000),
};
/**
 * A bounding box without top coordinate
 */
export const fakeBoundingWithoutTop = {
  left: datatype.number(2000),
  right: datatype.number(2000),
  bottom: datatype.number(2000),
};
/**
 * A bounding box without bottom coordinate
 */
export const fakeBoundingWithoutBottom = {
  left: datatype.number(2000),
  right: datatype.number(2000),
  top: datatype.number(2000),
};
/**
 * A bounding box with string data in left coordinate
 */
export const fakeBoundingBoxWithLeftString = {
  left: datatype.string(20),
  right: datatype.number(2000),
  top: datatype.number(2000),
  bottom: datatype.number(2000),
};
/**
 * A bounding box with string data in right coordinate
 */
export const fakeBoundingBoxWithRightString = {
  left: datatype.number(2000),
  right: datatype.string(20),
  top: datatype.number(2000),
  bottom: datatype.number(2000),
};
/**
 * A bounding box with string data in top coordinate
 */
export const fakeBoundingBoxWithTopString = {
  left: datatype.number(2000),
  right: datatype.number(2000),
  top: datatype.string(20),
  bottom: datatype.number(2000),
};
/**
 * A bounding box with string data in bottom coordinate
 */
export const fakeBoundingBoxWithBottomString = {
  left: datatype.number(2000),
  right: datatype.number(2000),
  top: datatype.number(2000),
  bottom: datatype.string(20),
};
//=======================================================================================================
/**
 * Create actual bounding box object based on the provided json objects defined above.
 */
export const aFakeBoundingBox = new BoundingBoxDTO(fakeBoundingBox);
