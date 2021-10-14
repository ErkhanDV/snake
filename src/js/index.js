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

    this.state = {
      fieldData: fieldData
    };
  }

  render() {
    return React.createElement("div", null, React.createElement("h1", null, "Let's play!"), React.createElement(Field, {
      data: this.state.fieldData
    }));
  }

}

document.addEventListener('DOMContentLoaded', evt => {
  ReactDOM.render(React.createElement(React.StrictMode, null, React.createElement(App, null)), document.getElementById('app'));
});

},{}]},{},[1]);
