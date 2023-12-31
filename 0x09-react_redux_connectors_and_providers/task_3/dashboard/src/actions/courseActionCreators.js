import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export function selectCourse(index) {
    return {
        type: SELECT_COURSE,
        payload: {index}
    }
}

export const boundSelectCourse = (i) => dispatch(selectCourse(i));

export function unSelectCourse(index) {
    return {
        type: UNSELECT_COURSE,
        payload: {index}
    }
}

export const boundUnselectCourse = (i) => dispatch(unSelectCourse(i));
