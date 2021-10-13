class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Let's play!</h1>
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
