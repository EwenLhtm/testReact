import { Card } from "./Elements/Card"

export function MenuCard ({onClick}) {
    const title = "Test de carte"
    const text = "je test des trucs pour voir comment fonctionne react"
    const image = "/node_modules/@gouvfr/dsfr/dist/artwork/pictograms/buildings/city-hall.svg"
    const alt = "photo d'une maire "
  
    return <main className="fr-pt-md-14v" role="main" id="content">
      <div className="fr-container fr-container--fluid fr-mb-md-14v">
        <div className="fr-grid-row fr-grid-row-gutters fr-grid-row--center">
            <Card title="Test de carte" titre={title} text={text} image={image} alt={alt}/>
        </div>
      </div>
      <button className="fr-btn fr-ml-5w" onClick={(e) => onClick('lA')}>mode liste</button>
      <button className="fr-btn fr-ml-5w" onClick={(e) => onClick('game')}>mode jeux</button>
    </main>
  }
  