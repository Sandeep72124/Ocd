import React, { Component } from 'react';

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responses: {},
    };
  }

  handleResponseChange = (question, response) => {
    this.setState((prevState) => ({
      responses: {
        ...prevState.responses,
        [question]: response,
      },
    }));
  };

  handleSubmit = () => {
    // You can add code to process and save the user's responses here.
  };

  render() {
    return (
      <div>
        <h2>Questionnaire</h2>
        <form>
          <div>
            <h3>Question 1:</h3>
            <input
              type="text"
              placeholder="Your response"
              onChange={(e) => this.handleResponseChange('question1', e.target.value)}
            />
          </div>
          <div>
            <h3>Question 2:</h3>
            <textarea
              rows="4"
              cols="50"
              placeholder="Your response"
              onChange={(e) => this.handleResponseChange('question2', e.target.value)}
            />
          </div>
          {/* Add more questions as needed */}
          <button type="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Questionnaire;
