import React from 'react'

class SearchAssist extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          searchAssist: this.props.searchAssist,
          display: this.props.display
        }
    }

    generateSearchAssistListItems() {
      const searchAssistResults = this.state.searchAssist.map((result, idx) => (
        <li 
          key={`${result}-${idx}`} 
          className="search-assist-item" 
          onClick={() => this.props.handleSearchSelect(result)}
            >
            {result}
        </li>
      ));
      return searchAssistResults;
    }

    render() {
        if (!this.props.display) return null
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
