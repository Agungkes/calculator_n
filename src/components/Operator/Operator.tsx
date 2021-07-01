import React from 'react';
import styles from './Operator.module.css'

type Props = {
    type: 'plus' | 'minus' | 'multiply' | 'divide'
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
const Operator: React.FC<Props> = ({ type, ...props }): JSX.Element => (
    <div className={styles.Container} {...props}>
        <span className={styles.OperatorValue}>{
            (type === 'plus' && '+') 
            || (type === 'minus' && '-')
            || (type === 'multiply' && 'x')
            || '/'
        }</span>
    </div>
);

export default Operator;
