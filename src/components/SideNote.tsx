import React, { PropsWithChildren } from 'react';

const SideNote: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className="card padding--sm">{children}</div>;
};

export default SideNote;
