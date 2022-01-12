// actions
// i.e. when we search users and it makes a request to github
// cleaning up app.js
// using types

import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

// using axios for requests
// useReducer is a hook

// creating initial state
const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    // use reducer hook
    const [state, dispatch] = useReducer (GithubReducer, initialState);

    // search users
    const searchUsers = async text => {
        setLoading();

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secrets=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        // res is request
    dispatch( { 
        type: SEARCH_USERS,
        payload: res.data.items
    });
};

    // get a single github user
    const getUser = async (username) => {
        setLoading();

        const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${
            process.env.REACT_APP_GITHUB_CLIENT_ID}
            &client_secrets=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        // res is request
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }

    // get repos
    const getUserRepos = async (username) => {
        setLoading();

        const res = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
            process.env.REACT_APP_GITHUB_CLIENT_ID}
            &client_secrets=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        // res is request
        //this.setState({ repos: res.data, loading: false });
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }

    // clear users
    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    // set loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    // return provider
    // making these available to entire app
    // wrap entire application in this provider
    return (
    <GithubContext.Provider
    value ={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}>
        {props.children}
    </GithubContext.Provider>
    )
}

export default GithubState;