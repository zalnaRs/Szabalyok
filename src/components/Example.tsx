import React, { PropsWithChildren } from 'react';

const Example: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="theme-admonition theme-admonition-tip alert alert--success padding--md">
      <h3>Példa</h3>

      {children}
    </div>
  );
};

export default Example;
