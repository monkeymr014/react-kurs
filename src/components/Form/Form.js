import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Radio from '../Radio/Radio';

const types = {
    twitter: 'twitter',
    article: 'article',
    note: 'note',
}

const descrition = {
    twitter: 'twitter',
    article: 'article',
    note: 'note',
}

class Form extends React.Component {
    
    state = {
        actionOption: types.twitter
    }

    handleRadioButtonChange = (type) => {
        this.setState({
            actionOption: type
        })
    }
    render() {
        const { actionOption } = this.state;
        return (
            <div className={styles.wrapper}>
                <Title>
                    Add new {descrition[actionOption]}
                </Title>
                <form autoComplete='off'
                    className={styles.form}
                    onSubmit={this.props.submitFn}
                >
                    <div className={styles.wrapper_radio}>
                        <Radio
                            id={types.twitter}
                            type="radio"
                            checked={actionOption === types.twitter}
                            changeFn={() => this.handleRadioButtonChange(types.twitter)}
                        >twitter
                        </Radio>
                        <Radio
                            id={types.article}
                            type="radio"
                            checked={actionOption === types.article}
                            changeFn={() => this.handleRadioButtonChange(types.article)}
                        >article
                        </Radio>
                        <Radio
                            id={types.note}
                            type="radio"
                            checked={actionOption === types.note}
                            changeFn={() => this.handleRadioButtonChange(types.note)}
                        >note
                        </Radio>
                    </div>
                    <Input
                        name='Name'
                        label={actionOption === 'twitter' ? 'Twitter name' : 'Name'}
                        maxLength={30}
                    />
                    {actionOption != types.note ?
                        <Input
                            name='link'
                            label={actionOption === 'twitter' ? 'Twitter link' : 'link'}
                        />
                        : null
                    }
                    {actionOption === types.twitter ?
                        <Input
                            name='image'
                            label='Image'
                        />
                        : null}
                    <Input
                        name='descrition'
                        label='Descrition'
                        tag='textarea'
                    />
                    <Button>Send</Button>
                </form>
            </div>
        )
    }
}
export default Form;