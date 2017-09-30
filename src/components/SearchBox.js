import React, { Component } from "react";

import { searchRepo, searchUser } from '../actions/search'
import debounce from 'lodash/debounce'


export default class SearchBox extends Component {
  constructor(props){
    super(props)

    const {dispatch} = props
    this.search = debounce(function(e){
      dispatch(searchRepo(e.target.value))
      dispatch(searchUser(e.target.value))
    }, 250)

    this.handleSearch = this.handleSearch.bind(this)
    this.show = this.show.bind(this)
    this.state = {
      isVisible: false
    }
  }

  show(visible=false){
    if(visible){
      this.setState({isVisible: true})
      document.addEventListener('click', this.show)
    }else{
      this.setState({ isVisible: false });
      document.removeEventListener("click", this.show);
    }
  }

  handleSearch(e){
    e.preventDefault()
    e.persist()
    
    if(e.target.value){
      this.setState({checked: false})
      this.search(e)
      this.show(true)
    }else{
      this.show()
    }

  }
  
  render() {
    const { search } = this.props
    const mappedSearchRepo = search.repository.result && search.repository.result.items.map(item=> {
      return <li key={item.id}>
          <strong>{item.full_name}</strong> {item.description}
        </li>;
    })
    const mappedSearchUser = search.user.result && search.user.result.items.map(
        item => {
          return <li key={item.id}>
                <img className="avatar" src={item.avatar_url} alt="" /> {item.login}
            </li>;
        }
      );

    return <div className="search-box">
        <div className="search-input">
          <input type="text" onChange={this.handleSearch} />
          <i className="fa fa-search" />
        </div>
        <div className={"results " + (this.state.isVisible ? "show" : "")}>
          <h4>Repositories</h4>

          {search.repository.fetching ? "" : <input type="checkbox" id="repositories" />}
          <ul className="repositories">
            {search.repository.fetching ? <li>
                <i className="fa fa-circle-o-notch fa-spin fa-fw" /> Fetching Repositories...
              </li> : mappedSearchRepo}
            <li className="show-more">
              <label htmlFor="repositories">Show more...</label>
            </li>
          </ul>

          <h4>Users</h4>

          { search.user.fetching ? "" : <input type="checkbox" id="users" /> }
          <ul className="users">
            {search.user.fetching ? <li>
                <i className="fa fa-circle-o-notch fa-spin fa-fw" /> Fetching Repositories...
              </li> : mappedSearchUser}
            <li className="show-more">
              <label htmlFor="users">Show more...</label>
            </li>
          </ul>
        </div>
      </div>;
  }
}
