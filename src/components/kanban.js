import React, {Component} from 'react';
import List from './list';

export default class Kanban extends Component {
    render() {
        return(
            <div className="app">
                <List id='todo' title='To Do' cards = {
                    this.props.cards.filter(card => card.status === 'done')
                }/>

                <List id='in-progress' title='In Progress' cards = {
                    this.props.cards.filter(card => card.status === 'in-progress')
                }/>

                <List id='done' title='Done' cards = {
                    this.props.cards.filter(card => card.status === 'done')
                }/>
            </div>
        );
    }
};