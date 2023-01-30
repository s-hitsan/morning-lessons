import './AppModal.scss';

import PropTypes from 'prop-types';
import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { AppField } from '../AppField/AppField';

export class AppModal extends Component {
  componentDidMount() {
    console.log('did mount');
  }

  shouldComponentUpdate() {
    //if false component will not update (rerurn true its default value)
    return false;
  }

  componentDidUpdate() {
    console.log('did update');
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  render() {
    const { isShow, onHide, inputValue, onInputChange } = this.props;

    return (
      <div>
        <Modal
          onHide={onHide}
          show={isShow}
          size='sm'
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
              Registration confirm
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Confirmation</h4>
            <p>You really want to register?</p>
            <AppField
              width='100px'
              value={inputValue}
              onInputChange={onInputChange}
              name='modalInputValue'
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Confirm</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

AppModal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
