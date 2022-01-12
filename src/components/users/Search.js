import React, { useState } from 'react'
import PropTypes from 'prop-types';

//converted class to function with hooks and state

// useState is a hook

// props are passed in in this function; destructuring the prop
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {

    // created text state
    const [text, setText] = useState('');

    // function within a function add const
    const onChange = (event) => {
        setText(event.target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (text === '') {
            setAlert('Please enter a string', 'light');

        } else {
            searchUsers(text);
            setText('');
        }
    }
    // render not needed cause not a class anymore
    // need a return
    return (
        <div>
            <form onSubmit = {onSubmit} className="form">
                <input type="text"
                    name="text"
                    placeholder="Search Users..."
                    value={text}
                    onChange={onChange}
                />
                <input type="submit"
                    value="Search"
                    className="btn btn-dark btn-block"
                />
            </form>
            {showClear && (
                <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
            )}
        </div>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Search
