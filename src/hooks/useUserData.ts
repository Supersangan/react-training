import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { meRequestAsync } from '../store/me/actions';
import { TRootState } from '../store/reducer';

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {  
  const data = useSelector<TRootState, IUserData>((state) => state.me.data);
  const loading = useSelector<TRootState, boolean>((state) => state.me.loading);
  const token = useSelector<TRootState, string>((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;    
    dispatch(meRequestAsync());
  }, [token]);

  return {
    data,
    loading,
  };
}
