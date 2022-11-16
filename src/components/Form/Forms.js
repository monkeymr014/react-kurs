import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';

const Form = ({ submitFn }) => (
    <div className={styles.wrapper}>
        <h2>Add new twitter account</h2>
        <form autoComplete='off'
            className={styles.form}
            onSubmit={submitFn}
        >
            <Input
                name='Name'
                label='Name'
                maxLength={30}
            />
            <Input
                name='link'
                label='Twiter link'
            />
            <Input
                name='image'
                label='Image'
            />
            <Input
                name='descrition'
                label='Descrition'
                tag='textarea'
            />
            <button
                className={styles.button}
                type="submit"
            >
                add new item
            </button>
        </form>
    </div>
);

export default Form;