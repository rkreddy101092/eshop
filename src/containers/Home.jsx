import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from '../components/HomePage';

class Home extends Component {
    render() {
        const { banners, categories } = this.props;
        return (
            <HomePage {...this.props} />
        )
    }
}

const mapState = (state, ownprops) => {
    return {
        banners: state.home.banners,
        categories: state.home.categories,
    }
}

const mapDispatch = {

}

export default connect(mapState, mapDispatch)(Home);