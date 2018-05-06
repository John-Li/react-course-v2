const appRoot = document.getElementById('app')

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const onRemoveAll = () => {
  app.options = [];
  render();
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.option.value;

  if(option){
    app.options.push(option);
    e.target.option.value = '';

    render();
  }
}

const render = () => {
  const template = (
    <div>
      <h1>{ app.title }</h1>
      <p>{ app.subtitle }</p>
      <p>{ app.options.length > 0 ? 'Here are your options:' : 'No options' }</p>
      <button disabled={app.options.length < 1} onClick={ onMakeDecision }>What should I do?</button>
      <button onClick={ onRemoveAll }>Remove All</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={ onFormSubmit }>
        <input type='text' name='option'/>
        <button>Add</button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

render();
