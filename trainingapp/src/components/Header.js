import React, {Component} from 'react';
import '../styles/header.css';
import {Link} from 'react-router-dom';


class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            defaultPage: this.props.currentPage
        }

    }

componentDidMount(){
    this.setState({
        defaultPage: true
    })
}

render(){
    const homeHeader = {}
}
}