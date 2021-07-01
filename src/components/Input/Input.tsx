import React from 'react';
import styles from './Input.module.css'

type Props = {
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
const Input: React.FC<Props> = ({ onChange }): JSX.Element => {
    return (
        <div className={styles.InputContainer}>
          <input type='number' onChange={onChange} className={styles.Input} />
          <input type="checkbox" onChange={onChange} className={styles.InputCheckbox} />
        </div>
    )
};

export default Input;
