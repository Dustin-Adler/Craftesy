import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-solid-svg-icons'

class SearchAssist extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          searchAssist: this.props.searchAssist || [],
          display: this.props.display || false
        }
    }

    handleListSelection(listing) {
        this.props.handleSearchSelect(listing)
        this.props.togglePopUp()
        this.props.clearSearchBar()
        this.props.clearSearchAssist()
    }

    componentDidUpdate(prevProps) {
      const stateKeys = Object.keys(this.state)
      for (let key of stateKeys) {
        if (prevProps[key] !== this.props[key]) {
          this.setState({ [key]: this.props[key] });
        }
      }
    }

    generateSearchAssistListItems() {
      const searchAssistResults = this.state.searchAssist.map((result, idx) => {
        const formattedResult = result.replace(/\b[a-z](?!\s)/g, (char) => {return char.toUpperCase()})
        return (
          <li 
            key={`${result}-${idx}`} 
            className="category-option search-assist-item" 
            onClick={() => this.handleListSelection(result)}>
              <div className='select-hand-container width-up'>
                <FontAwesomeIcon className='select-hand' icon={faHandPointer}/>
              </div>
              <p className="option-name">
                {formattedResult}
              </p>
          </li>
        )
      });
      return searchAssistResults;
    }

    render() {
        if (!this.state.display) return null
        const searchAssistResults = this.generateSearchAssistListItems()
        return (
          <>
            <div className="search-assist-window">
              <ul className="search-assist-list">
                {searchAssistResults}
              </ul>
            </div>
            <div onClick={() => this.props.togglePopUp()} className='grey-screen-cover'/>
          </>
        )
    }
}

export default SearchAssist
