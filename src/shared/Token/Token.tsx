import { useDispatch } from 'react-redux';
import { useToken } from '../../hooks/useToken';
import { setToken } from '../../store';

export function Token() {
  const dispatch = useDispatch();
  const token = useToken();
  dispatch(setToken(token));
  return null;
}
