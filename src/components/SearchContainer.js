import React, { Component } from 'react';
import sortBy from 'sort-by'
import escapeRegExp from 'escape-string-regexp'


class SearchContainer extends Component {
  state = {
    query:'',
    searchResult: []
  }

  updateQuery =(query) => {
    this.setState({
      query: query
    })
  }

  searchLocations = (query) =>{
    let filteredLocations
    let locations = this.props.locationsToUse
    let locationsAvailable = false
    let result = {}

    if(locations.length >0 && locations !== undefined && locations !== null){
      locationsAvailable = true
      locations.sort(sortBy('name'))
    }

    if (query) {
		const regMatch = new RegExp(escapeRegExp(query.trim()), 'i')
		if (locationsAvailable)
				filteredLocations = locations.filter((location) => regMatch.test((location.name)))
		 else
			 filteredLocations = []

		}

		result = {locationsAvailable: locationsAvailable	, filteredLocations: filteredLocations}


		return result
  }

  handleTextAlters = (query, event) => {
				this.updateQuery(query)
				let result = this.searchLocations(query)
				this.props.onUserSearch(result.filteredLocations, query)
				this.setState({SearchResult: result.filteredLocations})
      }

  render()
  {
    return(
      <div id='search-container'>
        <input
        id="search-input"
        type="text"
        placeholder="Enter your search.."
        aria-label="Enter the name of the place you search"
        onChange = {(event) => this.handleTextAlters(event.target.value, event)}
        />
        <div id='search-results'>
					<ul
						id='search-results-list'
						aria-label='List of restaurants in Park Street area'
						tabIndex="0"
					>
          {((!this.props.locationsNotFound) && (this.props.locationsToUse.map(location =>(
            <ol key={location.id}
								tabIndex="0"
								onClick={(event) => this.props.handleLocationClicks(event, location.location, location.id)}
							>{location.name}
              <br/>
              {(this.props.selectedLocation === location.id ) && <span className='search-items-address'>
								Type of place: {location.categories[0].name}
							</span> }
            </ol>
          ))))

          }
          </ul>
        </div>
      </div>
    )
  }

}


export default SearchContainer;
