import * as React from 'react';

interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export default class Hello extends React.Component<IProps> {
  render() {
    const {name, enthusiasmLevel = 1, onIncrement, onDecrement} = this.props;
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    )
  }
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}