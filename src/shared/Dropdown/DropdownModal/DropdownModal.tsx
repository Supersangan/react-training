import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdownmodal.css';

interface IDropDownModalProps {
  children: React.ReactNode;
  setIsDropdownOpen: (value: boolean) => void;
  onClose?: () => void;
  left: number;
  top: number;
  width: number;
}

export function DropdownModal({
  children,
  setIsDropdownOpen,
  onClose,
  left,
  top,
  width,
}: IDropDownModalProps) {
  const node = document.querySelector('#dropdownModal_root');
  if (!node) return null;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        onClose?.();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      className={styles.container}
      style={{ left: left, top: top, width: width }}
      ref={ref}
    >
      <div className={styles.wrapper} onClick={() => setIsDropdownOpen(false)}>
        {children}
      </div>
    </div>,
    node
  );
}
