import React, { Component } from 'react';
import './Switch.css';

class Switch extends Component {
  render() {
    const { on, className = '', ...props } = this.props

    const btnClassName = [
      className,
      'toggle-btn',
      on ? 'toggle-btn-on' : 'toggle-btn-off',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div>
        <input
          className="toggle-input"
          type="checkbox"
          checked={on}
          onChange={() => {
            // changing is handled by clicking the button
          }}
        />
        <button
          className={btnClassName}
          aria-label="Toggle"
          {...props}
        />
      </div>
    );
  }
}

export { Switch }
