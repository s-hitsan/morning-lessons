import { ClassNames } from "@emotion/react";
import PropTypes from "prop-types";
import "./AppButton.scss"

export const AppButton = ({ width, tittle, type = "button", onClick }) => {


    return (
        <div >
            <ClassNames>
                {({ css, cx }) => (
                    <button onClick={onClick} type={type} style={{ width }} className={cx(
                        'add__button',

                        css`
                        &:hover {
                            background: #943b00;
                        }
                        `
                    )} >
                        <p>
                            {typeof tittle === 'object' ? tittle.text : tittle}
                        </p>
                    </button>
                )}
            </ClassNames>
        </div>
    )
}

AppButton.propTypes = {
    tittle: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired
}