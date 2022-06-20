class planes extends React.Component {
    constructor(props) {
      super(props);
      this.state = { planes: '' };
    }
    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }
    render() {
      return (
        <select value={this.state.planes} name='planes' handleChange={this.handleChange}>
          <option value="A220">A220</option>
          <option value="ARJ21">ARJ21</option>
          <option value="737-800">737-800</option>
        </select>
      )
    }
  }