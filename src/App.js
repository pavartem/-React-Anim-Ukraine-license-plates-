import React from 'react';
import './App.css';
import Licence from './Licence';

class App extends  React.Component {

    state = {
        firstLetters: 'AA',
        numbers: '0123',
        secondLetters: 'BB',
        changed: false
    };

    handleFirst = (event) => {
        this.setState({
            firstLetters: event.target.value,

        });
        if (this.state.firstLetters.length === 2)
            this.setState({ changed: false});
        else
            this.setState({ changed: true});
    };

    handleNumbers= (event) => {
        this.setState({
            numbers: event.target.value,
        });

        if (this.state.numbers.length === 4)
            this.setState({ changed: false});
        else
            this.setState({ changed: true});
    };

    handleSecond = (event) => {
        this.setState({ secondLetters: event.target.value});
        if (this.state.secondLetters.length === 2)
            this.setState({ changed: false});
        else
            this.setState({ changed: true});

    };

    render() {
        return (
        <div className="App">
          <input type="text" maxLength="2" className="form-control mr-3 letters" value={this.state.firstLetters} onChange={this.handleFirst}/>
          <input type="text" maxLength="4" className="form-control mr-3 number" value={this.state.numbers} onChange={this.handleNumbers}/>
          <input type="text" maxLength="2" className="form-control mr-3 letters" value={this.state.secondLetters} onChange={this.handleSecond}/>
          <Licence number={this.state.firstLetters + ' ' + this.state.numbers + ' ' + this.state.secondLetters} changed={this.state.changed}/>
        </div>
  );
}
}

export default App;
