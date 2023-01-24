import PropTypes from "prop-types";
import styles from "./AddButton.module.css"

export const AddButton = ({ width, tittle }) => {

    return (
        <div className={styles.add__button_wrapper} >
            <button style={{ width }} className={styles.circle__button} >
                <p>
                    {typeof tittle === 'object' ? tittle.text : tittle}
                </p>
            </button>
        </div>
    )
}

AddButton.propTypes = {
    tittle: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired
}