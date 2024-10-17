import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from './UserContext';
import ErrorBoundary from './ErrorBoundary';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
    static contextType = UsersContext;
    constructor(){
        super();
        this.state= {
            filteredUsers: [],
            searchTerm: '',
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.searchTerm !== this.state.searchTerm)
        {
            this.setState({
                filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm))
            });
        }
        
    }
    componentDidMount(){
        //runs only once when the component rendered for the first time , we can write HTTP requestss here 
        this.setState({
            filteredUsers: this.context.users, //here we are loading our data after teh component mounted
        })
    }
    searchChangeHandler(event){
        this.setState({
            searchTerm: event.target.value
        });
      };
      
      render(){
        return (
            <Fragment>
              <div className={classes.finder}>
                <input type='search' onChange={this.searchChangeHandler.bind(this)} />
              </div>
              <ErrorBoundary>
              <Users users={this.state.filteredUsers} />
              </ErrorBoundary>
            </Fragment>
          );
      }
      
}


export default UserFinder;