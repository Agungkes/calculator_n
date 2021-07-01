import React, { useState } from 'react';

import Input from './components/Input'
import Operator from './components/Operator'

import styles from './App.module.css'
import operator from './utils/operator';
import type { OperationType } from './utils/operator/operator';

type InputState = {
  value?: number | string;
  key: string;
  active?: boolean
}


function App() {
  const [inputState, setInputState] = useState<InputState[]>([]);
  const [inputErrorMessage, setInputErrorMessage] = useState('');
  const [result, setResult] = useState(0);

  const updateInputState = ({ key }: InputState) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
    const changedIndex = [...inputState].findIndex(f => f.key === key);
    
    if (changedIndex !== -1) {
      const changed = [...inputState]
      if (e.target.value !== 'on') {
        changed[changedIndex].value = Number(e.target.value)
      } else {
        changed[changedIndex].active = e.target.checked 
      }

      setInputState(changed)
    } else {
      setInputState(prev => {
        return [...prev, {
          value: Number(e.target.value) || 0,
          key,
          active: e.target.checked || false
        }]
      })
    }
  }
  
  const handleOperation = (type: OperationType) =>  () => {
    const currentInputState = [...inputState];
    const activeCount = currentInputState.filter(f => f.active)

    if (activeCount.length > 1) {
      const res = [...inputState].reduce((prev, curr) => {
        const value = Number(curr.value)

        if (!Number.isNaN(curr.value) && curr.active && value > 0) {
          if (!prev) {
            return value;
          }
          return operator[type](prev, value)
        }
        return prev;
      }, 0)
      setInputErrorMessage('');
      setResult(res)
    } else {
      setInputErrorMessage('Silahkan beri ceklist lebih dari 1')
    }
  }

  return (
    <div className={styles.Container}>
      {inputErrorMessage && <div>{inputErrorMessage}</div>}

      <div style={{
        position: 'relative'
      }}>
        <Input onChange={updateInputState({key: 'input1'})} />
        <Input onChange={updateInputState({key: 'input2'})} />
        <Input onChange={updateInputState({key: 'input3'})} />

        <div className={styles.OperationContainer}>
          <Operator type='plus' onClick={handleOperation('plus')} />
          <Operator type='minus' onClick={handleOperation('minus')} />
          <Operator type='multiply' onClick={handleOperation('multiply')} />
          <Operator type='divide' onClick={handleOperation('divide')} />
        </div>

        <div className={styles.ResultContainer}>
          <span>Hasil: </span>
          <span>{result}</span>
        </div>
      </div>
     

    </div>
  );
}

export default App;
