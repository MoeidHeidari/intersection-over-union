/**
 * Author Moeid Heidari
 * Date 12 May 2022
 */
import { expandEnvVariables } from '../../domain/helpers';

expandEnvVariables();

/**
 * options enum
 */
export enum EnvObjects {
    INTERSECTION_OPTIONS = 'IntersectionOptions'
}
//===================================================================================================
/**
 * Intersection options
 */
export interface IntersectionOptions{
    /**
     * represents the number of decimal places to calculate and return back the muserment of intersection.
     */
    decimal_places: number;
}

/**
 * configuration function
 * @returns configuration taken from env
 */
 export const configuration = (): any => ({
    IntersectionOptions: {
      baseUri: process.env.DECIMAL_PLACES,
    }
  });

