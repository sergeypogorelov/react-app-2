import React, { FunctionComponent } from 'react';

import { Footer } from './footer/footer.component';

export const Page: FunctionComponent<{}> = ({ children }) => {
  return (
    <div className="container">
      {children}
      <Footer />
    </div>
  );
};
