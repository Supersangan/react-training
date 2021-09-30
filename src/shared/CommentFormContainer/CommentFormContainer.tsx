import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState, updateComment } from '../../store/reducer';
import { CommentForm } from '../CommentForm';

export function CommentFormContainer() {
  const value = useSelector<TRootState, string>((state) => state.commentText);
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <CommentForm
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
