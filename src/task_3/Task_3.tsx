import React, {ChangeEvent, ReactNode, useMemo, useRef, useState} from 'react';
import {SlowComponent} from './slowComponent/SlowComponent';


//find the problem and fix it as part of composition optimization, memo, children

type TaskPropsT = {
    children: ReactNode
}

export const Task_3 = ({children}: TaskPropsT) => {
    // const [value, setValue] = useState('');
    //
    // const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    // const SlComp = useMemo(() => <SlowComponent/>, [])
    const inputValRef = useRef<HTMLInputElement>(null)

    return (
        <div>
            <div>Lags when change value</div>
            <input type="text" ref={inputValRef}/>

            {/*<input type="text" value={value} onChange={onChange}/>*/}
            {/*<Input/>*/}
            {/*{SlComp}*/}
            <SlowComponent/>
            {/*  {children}*/}
        </div>
    );
};

const Input = () => {
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
    return <input type="text" value={value} onChange={onChange}/>
}