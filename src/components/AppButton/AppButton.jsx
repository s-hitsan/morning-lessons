import './AppButton.scss';

import { ClassNames } from '@emotion/react';
import PropTypes from 'prop-types';

export const AppButton = ({ width, tittle, isDisabled, type = 'button', onClick }) => {
  return (
    <div>
      <ClassNames>
        {({ css, cx }) => (
          <button
            disabled={isDisabled}
            onClick={onClick}
            type={type}
            style={{ width }}
            className={cx(
              'add__button',

              css`
                &:hover {
                  background: #943b00;
                }
              `,
            )}
          >
            <p>{typeof tittle === 'object' ? tittle.text : tittle}</p>
          </button>
        )}
      </ClassNames>
    </div>
  );
};

AppButton.propTypes = {
  tittle: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
};
