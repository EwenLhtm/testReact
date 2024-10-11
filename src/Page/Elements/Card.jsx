export function Card ({image, titre, text,alt}) {
    return <div className="fr-grid-row fr-mb-3w">
        <div className="fr-col fr-col-md-6">
            <div className="fr-card fr-enlarge-link">
                <div className="fr-card__body">
                    <div className="fr-card__content">
                        <h3 className="fr-card__title">
                            <a href="#">{titre}</a>
                        </h3>
                        <p className="fr-card__desc">{text}</p>
                    </div>
                </div>
                <div className="fr-card__header">
                    <div className="fr-card__img">
                        <img className="fr-responsive-img" src={image} alt={alt}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
}