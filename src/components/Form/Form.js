import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Radio from '../Radio/Radio';
import AppContext from "../../contex";


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
        type: types.twitter,
        title: '',
        link: '',
        image: '',
        descrition: '',
    }

    handleRadioButtonChange = (type) => {
        this.setState({
            type: type
        })
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        console.log(`
           title: ${this.state.title},
           link: ${this.state.link},
           image: ${this.state.image},
           descrition: ${this.state.descrition},
        `
        )
    }
    render() {
        const { type } = this.state;
        return (
            <AppContext.Consumer>
                {(contex) => (
                    <div className={styles.wrapper}>
                        <Title>
                            Add new {descrition[type]}
                        </Title>
                        <form autoComplete='off'
                            className={styles.form}
                            onSubmit={contex.addItem}
                        >
                            <div className={styles.wrapper_radio}>
                                <Radio
                                    id={types.twitter}
                                    type="radio"
                                    checked={type === types.twitter}
                                    changeFn={() => this.handleRadioButtonChange(types.twitter)}
                                >twitter
                                </Radio>
                                <Radio
                                    id={types.article}
                                    type="radio"
                                    checked={type === types.article}
                                    changeFn={() => this.handleRadioButtonChange(types.article)}
                                >article
                                </Radio>
                                <Radio
                                    id={types.note}
                                    type="radio"
                                    checked={type === types.note}
                                    changeFn={() => this.handleRadioButtonChange(types.note)}
                                >note
                                </Radio>
                            </div>
                            <Input 
                                onChange={this.handleInputChange}
                                value={this.state.title}
                                name='title'
                                label={type === 'twitter' ? 'Twitter name' : 'Name'}
                                maxLength={30}
                            />
                            {type != types.note ?
                                <Input 
                                    onChange={this.handleInputChange}
                                    value={this.state.link}
                                    name='link'
                                    label={type === 'twitter' ? 'Twitter link' : 'link'}
                                />
                                : null
                            }
                            {type === types.twitter ?
                                <Input 
                                    onChange={this.handleInputChange}
                                    value={this.state.image}
                                    name='image'
                                    label='Image'
                                />
                                : null}
                            <Input 
                                onChange={this.handleInputChange}
                                value={this.state.descrition}
                                name='descrition'
                                label='Descrition'
                                tag='textarea'
                            />
                            <Button>Send</Button>
                        </form>
                    </div>
                )}
            </AppContext.Consumer>
        )
    }
}
export default Form;