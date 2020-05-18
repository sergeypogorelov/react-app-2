import React, { FunctionComponent } from 'react';

import { Footer } from './footer/footer.component';

export const Page: FunctionComponent<{}> = (props) => {
  return (
    <div className="container">
      {props.children}
      <Footer />
    </div>
  );
};
