// class Header extends React.Component {
//   render() {
//     return <p>This is from Header</p>;
//   }
// }

// const jsx = (
//   <div>
//     <h1>Title</h1>
//     <Header />
//   </div>
// );

// ReactDOM.render(jsx, document.getElementById('app'));

console.log("App.js is running")

//JSX -Javascript XML
const app = {
  title: "Indecision App",
  subtitle: "Here we go again",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderTemplate();
  }
};

const onRemoveAll = () => {
  app.options = [];
  renderTemplate()
}

const appRoot = document.getElementById("app");

const numbers = [55, 34, 54];

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options exist"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
      {
        app.options.map((option) => {
          return <li key={option}>{option}</li>
        })
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
    </div>
    );
    ReactDOM.render(template, appRoot);
}

renderTemplate();

