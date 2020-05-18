import React, { FunctionComponent } from 'react';

import { ModalAlertProps } from './modal-alert-props.interface';

const DEF_Z_INDEX = 10000;
const DEF_TITLE = 'Alert';

export const ModalAlert: FunctionComponent<ModalAlertProps> = (props) => {
  const style: any = {
    zIndex: props.zIndex || DEF_Z_INDEX,
  };

  const title = props.title || DEF_TITLE;

  return (
    <div className="modal d-block" style={style}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer justify-content-center">
            <button
              className="btn btn-primary"
              type="button"
              onClick={props.onClose}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
