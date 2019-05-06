import React from "react";

export default class IfOffline extends React.Component {
  state = {
    onLine: navigator ? navigator.onLine : true
  };

  componentDidMount() {
    if (!window) return;
    window.addEventListener("online", this.goOnline);
    window.addEventListener("offline", this.goOffline);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.goOnline);
    window.removeEventListener("offline", this.goOffline);
  }

  goOnline = () => this.setState({ onLine: true });

  goOffline = () => this.setState({ onLine: false });

  render() {
    if (this.state.onLine) {
      return null;
    } else {
      return <span>{this.props.children}</span>;
    }
  }
}
