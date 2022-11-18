import { Component } from "react";

const styles = {
  bubbleAlert: {
    backgroundColor: "#E9725A",
    borderRadius: "15px",
    color: "#fff",
    padding: "2px 10px",
    fontSize: "0.9rem",
    width: "20px",
  },
};

class BubbleAlert extends Component {
  //Creamos el metodo que mostrará el numero al usuario
  getNumber(n) {
    if (!n) {
      return " ";
    }
    return n > 9 ? "9+" : n;
  }
  render() {
    const { value, valor} = this.props;
    return(
      <span style={styles.bubbleAlert}>
        {this.getNumber(value)}
      </span>
    );
  }
}

export default BubbleAlert;
