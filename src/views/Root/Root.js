import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from "../../contex";
import ArticlesViews from "../ArticlesView/ArticlesView";
import NotesViews from "../NotesView/NotesView";
import TwittersViews from "../TwittersView/TwittersView";
import './index.css'
import danAbramovImage from '../../assets/images/danabramov.jpg';
import ryanFlorenceImage from '../../assets/images/ryanflorence.jpg';
import michaelJacksonImage from '../../assets/images/michaeljackson.jpg';
import kentCDoddsImage from '../../assets/images/kentcdodds.jpg';
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";


class Root extends React.Component {

    state = {
        items: {
            twiters: [],
            articles:[],
            notes:[]
        },
        isModalOpen: false,
    }

    addItem = (e) => {
        e.preventDefault();
        console.log('aaa')

       /*  const newItem = {
            name: e.target[0].value,
            twitterLink: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value,
        };

        this.setState(prevState => ({
            items: [...prevState.items, newItem]
        }))


        e.target.reset(); */
    }
    openModal = () => (
        this.setState({
            isModalOpen: true
        })
    )

    closeModal = () => (
        this.setState({
            isModalOpen: false
        })
    )
    render() {
        const { isModalOpen } = this.state;
        const contexElement = {
            ...this.state,
           addItem: this.addItem
        }

        return (
            <BrowserRouter>
                <AppContext.Provider value={contexElement}>
                    <Header openModalFn={this.openModal} />
                    <Routes>
                        <Route exact path="/" element={<TwittersViews />} />
                        <Route path="/articles" element={<ArticlesViews />} />
                        <Route path="/notes" element={<NotesViews />} />
                        <Route path="/notes/:id" component={NotesViews} />
                    </Routes>
                    {isModalOpen && <Modal
                        closeModalFn={this.closeModal}
                    />}
                </AppContext.Provider>
            </BrowserRouter>
        )
    }
};

export default Root;