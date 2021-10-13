import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState, updateComment } from '../../store/reducer';
import { CommentForm } from '../CommentForm';

export function CommentFormContainer() {

  return <CommentForm />;
}
