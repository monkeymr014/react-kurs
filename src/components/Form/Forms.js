import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';

const types = {
    twitter: 'twitter',
    article : 'article',
    note: 'note',
} 

const descrition = {
    twitter: 'twitter',
    article : 'article',
    note: 'note',
}

class Form extends React.Component {

 
    state = {
        actionOption: types.twitter
    }

    handleRadioButtonChange = (type) => {
        this.setState({
            actionOption:type
        })
    }
    render() {
        return (
            <div className={styles.wrapper}>
                <Title>
                    Add new {descrition[this.state.actionOption]}
                </Title>
                <form autoComplete='off'
                    className={styles.form}
                    onSubmit={this.props.submitFn}
                >
                    <div className={styles.wrapper_radio}>
                    <input 
                        id={types.twitter}
                        type="radio"
                        checked={this.state.actionOption === types.twitter}
                        onChange={()=> this.handleRadioButtonChange(types.twitter)}
                    />
                        <label for={types.twitter}>twitter</label>
           
                    <input 
                        id={types.article}
                        type="radio"
                        checked={this.state.actionOption === types.article}
                        onChange={()=> this.handleRadioButtonChange(types.article)}
                    />
                        <label for={types.article}>article</label>
                   

                    <input 
                        id={types.note}
                        type="radio"
                        checked={this.state.actionOption === types.note}
                        onChange={()=> this.handleRadioButtonChange(types.note)}
                    />
                        <label for={types.note}>note</label>
                    </div>
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
        )
    }
}
export default Form;