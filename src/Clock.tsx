import React from 'react';

type Props = {
  name: string;
  hasClock: boolean;
};
type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state = { date: new Date() };

  private timerId?: number;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const now = new Date();

      this.setState({ date: now });
      if (this.props.hasClock) {
        // eslint-disable-next-line no-console
        console.log(now.toUTCString().slice(-12, -4));
      }
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
