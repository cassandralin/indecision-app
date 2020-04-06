let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility; 
  render()
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility App</h1>
      <button onClick={toggleVisibility}>{
        visibility ? "Hide Details" : "Show Details"
      }</button>
      { visibility && (
        <div>
        <p>Hey, these are some details you can now see</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, document.getElementById("app"))
}

render();
