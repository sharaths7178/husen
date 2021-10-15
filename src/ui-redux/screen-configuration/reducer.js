import * as screenActionTypes from "./actionTypes";
import {  prepareFinalObject } from "./utils";

const getUserInfo=()=>{
  const userInfo=window.localStorage.getItem("userInfo");
  return userInfo?JSON.parse(userInfo):{}
}

const intialState = {
  preparedFinalObject: {
    snackbar:{
      open:false,
      variant:"success",
      message:""
    },
    spinner:false,
    userInfo:getUserInfo()
  }
};

const screenConfiguration = (state = intialState, action) => {
  switch (action.type) {
    case screenActionTypes.PREPARE_FINAL_OBJECT:
      const updatedPreparedFinalObject = prepareFinalObject(
        state.preparedFinalObject,
        action.jsonPath,
        action.value
      );
      return {
        ...state,
        preparedFinalObject: updatedPreparedFinalObject
      };
    default:
      return state;
  }
};

export default screenConfiguration;
