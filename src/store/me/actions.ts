import axios from 'axios';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { TRootState } from '../reducer';

export const ME_REQUEST = 'ME_REQUEST';
export type TMeRequestAction = {
  type: typeof ME_REQUEST;
};

export const meRequest: ActionCreator<TMeRequestAction> = () => ({
  type: ME_REQUEST,
});

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
export type TMeRequestSuccessAction = {
  type: typeof ME_REQUEST_SUCCESS;
  data: IUserData;
};

export const meRequestSuccess: ActionCreator<TMeRequestSuccessAction> = (
  data: IUserData
) => ({
  type: ME_REQUEST_SUCCESS,
  data,
});

export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
export type TMeRequestErrorAction = {
  type: typeof ME_REQUEST_ERROR;
  error: string;
};

export const meRequestError: ActionCreator<TMeRequestErrorAction> = (
  error: string
) => ({
  type: ME_REQUEST_ERROR,
  error,
});

export const meRequestAsync =
  (): ThunkAction<void, TRootState, unknown, Action<string>> =>
  (dispatch, getState) => {
    dispatch(meRequest());
    axios
      .get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: `bearer ${getState().token}` },
      })
      .then((resp) => {
        const userData = resp.data;
        dispatch(
          meRequestSuccess({ name: userData.name, iconImg: userData.icon_img })
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(meRequestError(String(error)));
      });
  };
