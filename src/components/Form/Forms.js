import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';

const Form = ({ submitFn }) => (
    <div className={styles.wrapper}>
        <Title>
            Add new twitter account
        </Title>
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
            <Button>Send</Button>
        </form>
    </div>
);

export default Form;