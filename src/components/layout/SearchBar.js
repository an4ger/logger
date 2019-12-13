import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = ({text, onChange}) => {
    return (
        <nav style={{ marginBottom: '30px' }} className='blue'>
            <div className='nav-wrapper'>
                <form>
                    <div className='input-field'>
                        <input
                            id='search'
                            type='search'
                            placeholder='Search Logs..'
                            ref={text}
                            onChange={onChange}
                        />
                        <label className='label-icon' htmlFor='search'>
                            <i className='material-icons'>search</i>
                        </label>
                        <i className='material-icons'>close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

SearchBar.propTypes = {
    searchLogs: PropTypes.func.isRequired
}

export default SearchBar
