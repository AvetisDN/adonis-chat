import React from 'react';
import cx from 'classnames';

const Button = ({ children, color, classes, disabled, ...otherProps }) => {
  const classNames = cx(
    {
      'cursor-not-allowed': disabled,
      'opacity-50': disabled,
      [`hover:bg-${color}-700`]: !disabled
    },
    `bg-${color}-500 text-white font-bold py-2 px-4 rounded appearance-none`,
    classes
  );

  return (
    <button
      className={classNames}
      {...otherProps}>
      {children}
    </button>
  )
};

Button.defaultProps = {
  color: 'indigo'
};

export default Button;
