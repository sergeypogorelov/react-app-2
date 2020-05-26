import React, { FunctionComponent } from 'react';

import { ModalAlertProps } from './modal-alert-props.interface';

export const DEF_Z_INDEX = 10000;

export const DEF_TITLE = 'Alert';

export const ModalAlert: FunctionComponent<ModalAlertProps> = ({
  children,
  title,
  zIndex,
  onClose,
}) => {
  const style: any = {
    zIndex: zIndex || DEF_Z_INDEX,
  };

  return (
    <div className="modal d-block" style={style}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title || DEF_TITLE}</h5>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer justify-content-center">
            <button className="btn btn-primary" type="button" onClick={onClose}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
