import { ActionCreator, Reducer } from 'redux';
import {
  IUserData,
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
  TMeRequestAction,
  TMeRequestErrorAction,
  TMeRequestSuccessAction,
} from './me/actions';
import { meReducer, TMeState } from './me/reducer';
import { SET_TOKEN, TSetTokenAction } from './token/actions';

export type TRootState = {
  commentText: string;
  token: string;
  me: TMeState;
};

const initialState: TRootState = {
  commentText: 'Привет, Skillbox!',
  token: '',
  me: {
    loading: false,
    error: '',
    data: {},
  },
};

// UPDATE_COMMENT
const UPDATE_COMMENT = 'UPDATE_COMMENT';
type TUpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string;
};
export const updateComment: ActionCreator<TUpdateCommentAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
});

type TMyAction =
  | TUpdateCommentAction
  | TSetTokenAction
  | TMeRequestAction
  | TMeRequestSuccessAction
  | TMeRequestErrorAction;

export const rootReducer: Reducer<TRootState, TMyAction> = (
  state = initialState,
  action
) => {  
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:      
      return {
        ...state,
        me: meReducer(state.me, action),
      };

    default:
      return state;
  }
};
