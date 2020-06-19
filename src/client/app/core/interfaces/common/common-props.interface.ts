import { DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

export interface CommonProps<MatchParams>
  extends Partial<DispatchProp>,
    Partial<RouteComponentProps<MatchParams>> {}
