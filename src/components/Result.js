import React, { Component } from 'react';
import ResultRow from './ResultRow';
import PropTypes from 'prop-types';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOrder: false
    };


    this.questions = this.props.result;
    this.sortByDifficulty = this.sortByDifficulty.bind(this);
  }

  sortByDifficulty(event) {
    event.preventDefault();

    let newSortOrder =  !this.state.sortOrder;


    let sortFunction;
    if (newSortOrder) {
      sortFunction = (a, b) => {
        return a.numericDifficulty - b.numericDifficulty;
      };
    } else {
      sortFunction = (a, b) => {
        return b.numericDifficulty - a.numericDifficulty;
      };
    }

    this.questions =  this.questions.sort(sortFunction);

    this.setState({ sortOrder: newSortOrder });
  }

  render() {
    let results = this.questions.map((result, index) => {
      return <ResultRow key={'result' + index} question={result} />;
    });


    return (
      <div>
        <div className='result__header'>This is it! You answered correctly {this.props.result.amountOfCorrectAnswers} out of {this.props.result.amountOfQuestions} questions</div>
        <button className='result__filter' onClick={this.sortByDifficulty}>Sort by difficulty?</button>
        {results}
      </div>
    );
  }
}


export default Result;
