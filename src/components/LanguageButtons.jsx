function LanguageButtons(props) {
    return (
        <button className={`me-3 my-3 btn btn-${props.buttonColor}`} onClick={props.handleOnClick}>
            {props.name}
        </button>
    )
}

export default LanguageButtons;