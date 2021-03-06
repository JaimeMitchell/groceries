import './App.css';
import GroceryData from './groceryData';
import GroceryList from './components/GroceryList'
import { Component } from "react";

class App extends Component {

  // step 1: Default State is empty
  state = {
    GroceryData: GroceryData,
    Item: "",
    Units: "",
    Quantity: "",
    isPurchased: false
  }

  // step 2: when event happens change State Object above, in step 1.
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })

  }

  // step 3: Prevent the default State above, which would keep it empty
  handleSubmit = (event) => {
    event.preventDefault()

    // 4. Setting up a schema object of key:value pairs to insert in JSX render below
    const newGrocery = {
      GroceryData: GroceryData,
      Item: this.state.Item,
      Units: this.state.Units,
      Quantity: this.state.Quantity,
      isPurchased: this.state.isPurchased
    }
    //DOES THIS RESET THE STATE WHILE KEEPING THE ADDED ITEMS TO THE ARRAY
    this.setState({
      GroceryData: [newGrocery, ...this.state.GroceryData],
      Items: "",
      Units: "",
      Quantity: "",
      isPurchased: true
    })

    console.log(event)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">GROCERY LIST</header>
        <br></br>

        <form className='form' onSubmit={this.handleSubmit}>

          <label text="Item">Item</label>
          <input type="text" value={this.state.Item} onChange={this.handleChange} id="Item" />

          <label text="Unit">Units</label>
          <input type="text" value={this.state.Units} onChange={this.handleChange} id="Units" />

          <label text="Quantity">Quantity</label>
          <input type="text" value={this.state.Quantity} onChange={this.handleChange} id="Quantity" />

          <label className="purchased" text="isPurchased">Purchased?</label>
          <input type="checkbox" value={this.state.isPurchased} onChange={this.handleChange} id='isPurchased' />

          <input className='submit' type="submit" />
          
        </form>

        <GroceryList GroceryData={this.state.GroceryData} />

      </div>
    );

  }

}
export default App;
