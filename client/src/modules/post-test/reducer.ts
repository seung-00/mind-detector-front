import * as actions from './actions';
import * as types from './types';

export interface StateTypes extends types.PostTestState {
  level: number;
  centers: any[];
}

const initialState = {
  postStatus: {
    loading: false,
    success: false,
    error: null,
  },
  level: 0,
  centers: [''],
};

const postTest = (
  state: StateTypes = initialState,
  action: types.PostTestAction
) => {
  switch (action.type) {
    case actions.POST_TEST:
      return {
        ...state,
        postStatus: {
          ...state.postStatus,
          loading: true,
        },
      };
    case actions.POST_TEST_SUCCESS:
      return {
        ...state,
        postStatus: {
          ...state.postStatus,
          loading: false,
          success: true,
        },
      };
    case actions.POST_TEST_ERROR:
      return {
        ...state,
        postStatus: {
          ...state.postStatus,
          loading: false,
          error: action.error,
        },
      };
    case actions.FETCH_LEVEL:
      return {
        ...state,
        level: action.payload,
      };
    case actions.FETCH_CENTERS:
      return {
        ...state,
        centers: action.payload,
      };
    default:
      return state;
  }
};

export default postTest;
