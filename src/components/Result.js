import React, {Component} from 'react';
import ResultRow from './ResultRow';


class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortOrder: false
        }

        this.questions = this.props.result.questions;
        this.sortByDifficulty = this.sortByDifficulty.bind(this);
    }

    sortByDifficulty(event) {
        event.preventDefault();

        let newSortOrder =  !this.state.sortOrder,
            sortFunction ;
        if(newSortOrder) {
            sortFunction = (a,b) => {
                return a.numericDifficulty - b.numericDifficulty;
            }
        }else {
            sortFunction = (a,b) => {
                return b.numericDifficulty - a.numericDifficulty;
            }
        }

        this.questions =  this.questions.sort(sortFunction);
        
        this.setState({sortOrder: newSortOrder});
    }

    render() {
            let dataToRender = 'Wait please';
            if(this.questions){
                dataToRender = this.questions.map((result) => {
                    return <ResultRow element={result} />
                });
            }    
            
            return (
            <div>
                <h1>This is it!</h1>
                <h1> You answered correctly {this.props.result.amountOfCorrectAnswers} out of {this.props.result.amountOfQuestions} questions</h1>
                <button onClick={this.sortByDifficulty}>Sort by difficulty?</button>
                {dataToRender}
            </div>
        );
    }

}


export default Result;