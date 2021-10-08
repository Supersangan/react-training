import { Formik, useFormikContext } from 'formik';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState, updateComment } from '../../store/reducer';
import { EIcons, Icon } from '../Icon';
import styles from './commentform.css';


interface ICommentFormValues {
  comment: string;
}

function SaveFormStateToRedux() {
  const { values } = useFormikContext<ICommentFormValues>();
  const dispatch = useDispatch();

  useEffect(() => {
    if(!values) return;
    
    dispatch(updateComment(values.comment));
    console.log(values.comment);
    
  }, [values]);
  
  return null;
};

export function CommentForm() {
  const commentInitialvalue = useSelector<TRootState, string>((state) => state.commentText);

  const initialValues: ICommentFormValues = {
    comment: commentInitialvalue,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((response) => setTimeout(response, 500));
        alert(JSON.stringify(values));
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <button className={styles.buttonPluse} type="button">
            <Icon name={EIcons.pluse} size={10} />
          </button>

          <textarea
            className={styles.input}
            name="comment"
            defaultValue={values.comment}
            onChange={handleChange}
          ></textarea>
          {errors.comment && touched.comment && errors.comment}

          <div className={styles.controls}>
            <div className={styles.controlsButtons}>
              <button className={styles.controlsButton} type="button">
                <Icon name={EIcons.code} />
              </button>

              <button className={styles.controlsButton} type="button">
                <Icon name={EIcons.image} />
              </button>

              <button className={styles.controlsButton} type="button">
                <Icon name={EIcons.document} />
              </button>

              <button className={styles.controlsButton} type="button">
                <Icon name={EIcons.download} />
              </button>

              <button className={styles.controlsButton} type="button">
                <Icon name={EIcons.user} />
              </button>

              <button className={styles.controlsButton} type="button">
                <Icon name={EIcons.refresh} />
              </button>

              <button className={styles.controlsButton} type="button">
                <Icon name={EIcons.link} />
              </button>

              <button className={styles.controlsButton} type="button">
                <Icon name={EIcons.voice} />
              </button>

              <button className={styles.controlsButton} type="button">
                <Icon name={EIcons.answer} />
              </button>

              <button className={styles.controlsButton} type="button">
                <Icon name={EIcons.pencil} />
              </button>

              <button className={styles.controlsButton} type="button">
                <Icon name={EIcons.a} />
              </button>

              <button className={styles.controlsButton} type="button">
                <Icon name={EIcons.pdf} />
              </button>
            </div>

            <button className={styles.buttonEmoji} type="button">
              <Icon name={EIcons.emoji} size={20} />
            </button>

            <button
              className={styles.buttonSubmit}
              type="submit"
              disabled={isSubmitting}
            >
              <span className={styles.buttonText}>Комментировать</span>
              <span className={styles.buttonArrow}>
                <Icon name={EIcons.send} size={10} />
              </span>
            </button>
          </div>

          <SaveFormStateToRedux />
        </form>
      )}
    </Formik>
  );
}
