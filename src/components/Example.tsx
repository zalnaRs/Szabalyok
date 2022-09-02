import React, { PropsWithChildren } from 'react';

const Example: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="card padding--sm">
      <h3>Példa</h3>

      {children}
    </div>
  );
};

export default Example;
