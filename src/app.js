class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = [<Option optionText='Thing one' />, <Option optionText='Thing two' />, <Option optionText='Thing three' />]; 

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={ options }>
        </Options>
        <AddOption />
      </div>    
    )
  } 
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <h2>{ this.props.subtitle }</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert('Handeled');
  }

  render() {
    return (
      <div>
        <button onClick={ this.handlePick } >What should I do?</button>
      </div>    
    )  
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    alert('removeAll');
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleRemoveAll }>Remove All</button>
        <ol>
          {
            this.props.options.map((child, i)=> <li key={i}>{child}</li>)
          }
      </ol>
      </div>
    )
  }
}

class  Option extends React.Component {
  render() {
    return (
      <div>
        <p>{ this.props.optionText }</p>
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.option.value.trim();

    if(option){
      alert(option);
      e.target.option.value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleAddOption }>
          <input type='text' name='option'/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))