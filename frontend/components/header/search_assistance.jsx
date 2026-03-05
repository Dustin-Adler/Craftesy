import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-solid-svg-icons'
import { formatNameAsTitle } from '../../helpers/name_formatter'
import { ALL_CATEGORIES } from '../../utils/game_names'

class SearchAssist extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          searchAssist: this.props.searchAssist || [],
          display: this.props.display || false
        }
    }

    componentDidUpdate(prevProps) {
      const stateKeys = Object.keys(this.state)
      for (let key of stateKeys) {
        if (prevProps[key] !== this.props[key]) {
          this.setState({ [key]: this.props[key] });
        }
      }
    }

    handleListSelection(listing, e) {
        if (e.type === 'click' || e.key === 'Enter') {
          this.props.handleSearchSelect(listing);
          this.props.togglePopUp();
          this.props.clearSearchAssist();
        }
    }

    noMatches() {
      if (this.state.searchAssist.length > 0) return null
      return (
          <li 
            key={`no-matched-term`}
            className="category-option search-assist-item"
            tabIndex={0}
            onKeyDown={(e) => this.handleListSelection('', e)}
            onClick={(e) => this.handleListSelection('', e)}>
              <div className='select-hand-container width-up'>
                <FontAwesomeIcon className='select-hand' icon={faHandPointer}/>
              </div>
              <p className="option-name">
                Nothing matched your search. Look at everything?!
              </p>
          </li>
        )

    }

    generateSearchAssistListItems() {
      let searchAssistResults = this.state.searchAssist.length < 5 ? 
        [...this.state.searchAssist, ...ALL_CATEGORIES.filter(category => !this.state.searchAssist.includes(category))] : this.state.searchAssist
      searchAssistResults = searchAssistResults.map((result, idx) => {
        const formattedResult = formatNameAsTitle(result)
        const categoryTag = ALL_CATEGORIES.includes(result) ? <p className="option-category">Category</p> : null
        return (
          <li 
            key={`${result}-${idx}`}
            className="category-option search-assist-item"
            tabIndex={0}
            onKeyDown={(e) => this.handleListSelection(result, e)}
            onClick={(e) => this.handleListSelection(result, e)}>
              <div className='select-hand-container width-up'>
                <FontAwesomeIcon className='select-hand' icon={faHandPointer}/>
              </div>
              <p className="option-name">{formattedResult}</p>
              {categoryTag}
          </li>
        )
      });
      searchAssistResults.unshift(this.noMatches())
      return searchAssistResults;
    }

    render() {
        if (!this.state.display) return null
        const searchAssistResults = this.generateSearchAssistListItems()
        return (
          <>
            <div
              id={'search-assist'}
              className="search-assist-window search-assist-slide-in">
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
