import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { setSearchField, requestRobots } from './actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.setRobots.robots,
    isPendding: state.setRobots.isPendding,
    error: state.setRobots.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
      onRequestRobot: () => requestRobots(dispatch),
    }
  }

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobot();
  }

  render() {
    const { searchField, onSearchChange, robots, isPendding } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (isPendding) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1>Robot Friends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <CardList robots={filteredRobots} />
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
