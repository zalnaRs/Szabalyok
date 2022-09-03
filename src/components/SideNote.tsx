import React, { PropsWithChildren } from 'react';

const SideNote: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="theme-admonition theme-admonition-note alert alert--secondary padding--md">
      {children}
    </div>
  );
};

export default SideNote;
