import PropTypes from "prop-types";
import styles from "./CircleButton.module.css"

export const CircleButton = ({ width, tittle }) => {

    return (
        <div className={styles.circle__button_wrapper} >
            <button style={{ width }} className={styles.circle__button} >
                <p>
                    {typeof tittle === 'object' ? tittle.text : tittle}
                </p>
            </button>
        </div>
    )
}

CircleButton.propTypes = {
    tittle: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired
}