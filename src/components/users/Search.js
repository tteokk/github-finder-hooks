import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'


//converted class to function with hooks and state

// useState is a hook

// props are passed in in this function; destructuring the prop
const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    // created text state
    const [text, setText] = useState('');

    // function within a function add const
    const onChange = (event) => {
        setText(event.target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter a string', 'light');
        } else {
            githubContext.searchUsers(text);
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
            {githubContext.users.length > 0 && (
                <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}></button>
            )}
        </div>
    )
}

export default Search
