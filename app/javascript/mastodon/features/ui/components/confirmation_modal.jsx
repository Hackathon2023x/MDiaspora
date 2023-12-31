import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { injectIntl, FormattedMessage } from 'react-intl';

import { Button } from '../../../components/button';

class ConfirmationModal extends PureComponent {

  static propTypes = {
    message: PropTypes.node.isRequired,
    confirm: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    secondary: PropTypes.string,
    onSecondary: PropTypes.func,
    closeWhenConfirm: PropTypes.bool,
    intl: PropTypes.object.isRequired,
  };

  static defaultProps = {
    closeWhenConfirm: true,
  };

  handleClick = () => {
    if (this.props.closeWhenConfirm) {
      this.props.onClose();
    }
    this.props.onConfirm();
  };

  handleSecondary = () => {
    this.props.onClose();
    this.props.onSecondary();
  };

  handleCancel = () => {
    this.props.onClose();
  };

  render () {
    const { message, confirm, secondary } = this.props;

    return (
      <div className='modal-root__modal confirmation-modal'>
        <div className='confirmation-modal__container'>
          {message}
        </div>

        <div className='confirmation-modal__action-bar'>
          <Button onClick={this.handleCancel} className='confirmation-modal__cancel-button'>
            <FormattedMessage id='confirmation_modal.cancel' defaultMessage='Cancel' />
          </Button>
          {secondary !== undefined && (
            <Button text={secondary} onClick={this.handleSecondary} className='confirmation-modal__secondary-button' />
          )}
          <Button text={confirm} onClick={this.handleClick} autoFocus />
        </div>
      </div>
    );
  }

}

export default injectIntl(ConfirmationModal);
