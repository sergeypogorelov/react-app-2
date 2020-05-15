import React from 'react';

import { AppProps } from './app-props.interface';

export const App = (props: AppProps) => <h1>Hello {props.name}!</h1>;
