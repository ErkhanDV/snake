(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class Square extends React.Component {
  render() {
    return React.createElement("div", {
      className: `square-${this.props.data.type}`
    });
  }

}

class Row extends React.Component {
  render() {
    return React.createElement("div", {
      className: "row"
    }, this.props.data.map((squareData, index) => React.createElement(Square, {
      data: squareData,
      key: index
    })));
  }

}

class Field extends React.Component {
  render() {
    return React.createElement("div", {
      className: "field"
    }, this.props.data.map((rowData, index) => React.createElement(Row, {
      data: rowData,
      key: index
    })));
  }

}

class App extends React.Component {
  constructor(props) {
    super(props);
    let fieldData = [];

    for (let i = 0; i < 10; i++) {
      fieldData.push([]);

      for (let j = 0; j < 10; j++) {
        fieldData[i].push({
          type: 'empty'
        });
      }
    }

    this.snakeCoordinates = [[5, 0], [5, 1], [5, 2]];

    for (let i = 0; i < this.snakeCoordinates.length; i++) {
      fieldData[this.snakeCoordinates[i][0]][this.snakeCoordinates[i][1]] = {
        type: 'snake'
      };
    } // this.timer = setInterval(
    //   () => this.movingRight(),
    //   2000
    // );


    this.state = {
      fieldData: fieldData
    };
  }

  movingRight() {
    let snakeHead = [this.snakeCoordinates[this.snakeCoordinates.length - 1][0], this.snakeCoordinates[this.snakeCoordinates.length - 1][1] + 1];
    this.movingSnake(snakeHead);
  }

  movingLeft() {
    let snakeHead = [this.snakeCoordinates[this.snakeCoordinates.length - 1][0], this.snakeCoordinates[this.snakeCoordinates.length - 1][1] - 1];
    this.movingSnake(snakeHead);
  }

  movingUp() {
    let snakeHead = [this.snakeCoordinates[this.snakeCoordinates.length - 1][0] - 1, this.snakeCoordinates[this.snakeCoordinates.length - 1][1]];
    this.movingSnake(snakeHead);
  }

  movingDown() {
    let snakeHead = [this.snakeCoordinates[this.snakeCoordinates.length - 1][0] + 1, this.snakeCoordinates[this.snakeCoordinates.length - 1][1]];
    this.movingSnake(snakeHead);
  }

  movingSnake(snakeHead) {
    this.setState(() => {
      console.log(`This is snakeCoordinates at moving snake between 104 n 105 ${this.snakeCoordinates}`);
      console.log(`------------------`);
      let newFieldData = JSON.parse(JSON.stringify(this.state.fieldData));
      newFieldData[this.snakeCoordinates[0][0]][this.snakeCoordinates[0][1]] = {
        type: 'empty'
      };
      this.snakeCoordinates.splice(0, 1);
      this.snakeCoordinates.push(snakeHead);
      newFieldData[snakeHead[0]][snakeHead[1]] = {
        type: 'snake'
      };
      console.log(`This is snakeCoordinates at moving snake between 111 n 112 ${this.snakeCoordinates}`);
      console.log(`------------------`);
      return {
        fieldData: newFieldData
      };
    });
  }

  componentDidMount() {
    // this.timer = setInterval(
    //   () => this.movingRight(),
    //   2000
    // );
    this.movingDown();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log(`This is snakeCoordinates at RENDER ${this.snakeCoordinates}`);
    console.log(`------------------`);
    return React.createElement("div", null, React.createElement("h1", null, "Let's play!"), React.createElement(Field, {
      data: this.state.fieldData
    }));
  }

}

document.addEventListener('DOMContentLoaded', evt => {
  ReactDOM.render(React.createElement(React.StrictMode, null, React.createElement(App, null)), document.getElementById('app'));
});

},{}]},{},[1]);
