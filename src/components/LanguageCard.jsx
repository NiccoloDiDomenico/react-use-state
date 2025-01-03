function LanguageCard(props) {
    return (
        <>
            {props.language ? (
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">{props.language.name}</h5>
                        <p className="card-text">{props.language.description}</p>
                    </div>
                </div>
            ) : (
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className='text-center'>Seleziona un linguaggio</h5>
                    </div>
                </div>
            )}
        </>
    )
}

export default LanguageCard;