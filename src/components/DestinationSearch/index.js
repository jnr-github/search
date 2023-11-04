import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
    imagesList: destinationList
  }

  inputLetter = event => {
      this.setState({
          searchInput:event.target.value
      })
  }
  render() {
      const {searchInput,destinationList}=this.state
      const searchList=destinationList.filter(each)=>{
          each.name.includes(searchInput)
      }
    return (
      <div className="background">
        <h1 className="heading">Destination Search</h1>
        <input onChange={this.inputLetter} type="search" value="search" <img className="searchIcon" alt="search icon" src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png alt "/> />
        <ul>
            {searchList.map((eachItem)=>({
                <DestinationItem imageDetails={eachItem} key={eachItem.id}/>
            }))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
