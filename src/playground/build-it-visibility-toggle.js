const appRoot = document.getElementById('app')

const app = {
  title: 'Visibility Toggle',
  show: false
}

const onToggle = () => {
  app.show = !app.show;
  render();
}


const render = () => {
  const template = (
    <div>
      <h1>{ app.title }</h1>
      <button onClick={ onToggle }>{ app.show ? 'Hide Details' : 'Show Details' }</button>
      { app.show && <p>Hey. These are some details you can see now!</p>}
    </div>
  )

  ReactDOM.render(template, appRoot)
}

render();
