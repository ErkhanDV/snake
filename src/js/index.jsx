class Square extends React.Component {

  render() {
    return(
      <div className={`square-${this.props.data.type}`}></div>
    );
  }
}

class Row extends React.Component {

  render() {
    return(
      <div className="row">
        {
          this.props.data
          .map((squareData, index) => 
            <Square
              data={ squareData }
              key={ index } >
            </Square>
          )
        }
      </div>
    );
  }
}

class Field extends React.Component {

  render() {
    return(
      <div className="field">
        {
          this.props.data
          .map((rowData, index) => 
            <Row
              data={ rowData }
              key={ index } >
            </Row>
          )
        }
      </div>
    );
  }
}

class App extends React.Component {
  
  constructor(props) {
    super(props);
    let fieldData = [];
    for (let i = 0; i < 10; i++) {
      fieldData.push([]);
      for (let j = 0; j < 10; j++) {
        fieldData[i].push({type: 'empty'});
      }
    }
    this.state = {
      fieldData: fieldData
    };
  }

  render() {
    return(
      <div>
        <h1>Let's play!</h1>
        <Field data={this.state.fieldData} />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', (evt) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('app')
  );
});
