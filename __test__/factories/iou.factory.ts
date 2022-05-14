/**
 * Author Moeid Heidari
 * Date 13 May 2022
 */
export const TEST_INTERSECTION_1 = {
  ground_truth_bounding_box: {
    left: 3,
    right: 3,
    top: 7,
    bottom: 7,
  },
  predicted_bounding_box: {
    left: 7,
    right: 7,
    top: 6,
    bottom: 6,
  },
  expected: 0.118,
  number_of_decimal_places: 3,
};
//===========================================================================================================
export const TEST_INTERSECTION_2 = {
  ground_truth_bounding_box: {
    left: 3,
    right: 4,
    top: 10,
    bottom: 10,
  },
  predicted_bounding_box: {
    left: 3,
    right: 4,
    top: 10,
    bottom: 10,
  },
  expected: 1.0,
  number_of_decimal_places: 3,
};
//===========================================================================================================
export const TEST_INTERSECTION_3 = {
  ground_truth_bounding_box: {
    left: 2,
    right: 2,
    top: 6,
    bottom: 6,
  },
  predicted_bounding_box: {
    left: 10,
    right: 10,
    top: 5,
    bottom: 5,
  },
  expected: 0.0,
  number_of_decimal_places: 3,
};
//===========================================================================================================
export const TEST_INTERSECTION_4 = {
  ground_truth_bounding_box: {
    left: 2,
    right: 4,
    top: 5,
    bottom: 1,
  },
  predicted_bounding_box: {
    left: 4,
    right: 3,
    top: 9,
    bottom: 5,
  },
  expected: 0.064,
  number_of_decimal_places: 3,
};
//===========================================================================================================
export const TEST_INTERSECTION_5 = {
  ground_truth_bounding_box: {
    left: 2,
    right: 3,
    top: 3,
    bottom: 1,
  },
  predicted_bounding_box: {
    left: 2,
    right: 3,
    top: 3,
    bottom: 2,
  },
  expected: 0.5,
  number_of_decimal_places: 3,
};
//===========================================================================================================
export const TEST_INTERSECTION_6 = {
  ground_truth_bounding_box: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  predicted_bounding_box: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  expected: 0,
  number_of_decimal_places: 3,
};
//===========================================================================================================
export const TEST_INTERSECTION_7 = {
  ground_truth_bounding_box: {
    left: 1,
    right: 2,
    top: 2,
    bottom: 2,
  },
  predicted_bounding_box: {
    left: 2,
    right: 2,
    top: 2,
    bottom: 2,
  },
  expected: 0.333,
  number_of_decimal_places: 3,
};
//===========================================================================================================
export const TEST_INTERSECTION_8 = {
  ground_truth_bounding_box: {
    left: 2,
    right: 2,
    top: 6,
    bottom: 6,
  },
  predicted_bounding_box: {
    left: 10,
    right: 10,
    top: 5,
    bottom: 5,
  },
  expected: 0,
  number_of_decimal_places: 3,
};
//===========================================================================================================
export const TEST_INTERSECTION_9 = {
  ground_truth_bounding_box: {
    left: 300,
    right: 50,
    top: 0.5,
    bottom: 0.3455,
  },
  predicted_bounding_box: {
    left: 300,
    right: 50,
    top: 0.345,
    bottom: 0.23458,
  },
  expected: 0.468,
  number_of_decimal_places: 3,
};
//===========================================================================================================
export const TEST_INTERSECTION_10 = {
  ground_truth_bounding_box: {
    left: -234,
    right: -342,
    top: 6,
    bottom: 6,
  },
  predicted_bounding_box: {
    left: -234,
    right: 343,
    top: -5,
    bottom: 6,
  },
  expected: 0,
  number_of_decimal_places: 3,
};
//===========================================================================================================
