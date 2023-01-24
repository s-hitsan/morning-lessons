import proptypes from "proptypes";
import "./AddButton.css"

export const AddButton = (props) => {


    return (
        <div className="add-button-wrapper" >
            <button className="add-button" >
                <p>
                    {typeof props.tittle === 'object' ? props.tittle.text : props.tittle}
                </p>
            </button>
        </div>
    )
}

AddButton.propTypes = {
    tittle: proptypes.oneOf([proptypes.object, proptypes.string])
}