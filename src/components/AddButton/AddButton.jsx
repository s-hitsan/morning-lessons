import { ClassNames } from "@emotion/react";
import PropTypes from "prop-types";
import "./AddButton.scss"

export const AddButton = ({ width, tittle, onClick }) => {


    return (
        <div >
            <ClassNames>
                {({ css, cx }) => (
                    <button onClick={onClick} style={{ width }} className={cx(
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

AddButton.propTypes = {
    tittle: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired
}