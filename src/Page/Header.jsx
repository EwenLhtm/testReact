import { motion } from "framer-motion"

export function Header ({page, onChange}) {
    return <header role="banner" className="fr-header">
        <div className="fr-header__body">
            <div  className="fr-container">
                <div  className="fr-header__body-row">
                    <div className="fr-header__brand fr-enlarge-link">
                        <motion.div initial={{opacity:0, x:-250 }} animate={{opacity:1, x:0}} transition={{duration:1.7}} className="fr-header__brand-top">
                            <div className="fr-header__logo">
                                <p className="fr-logo">
                                    Intitulé
                                    <br/>officiel
                                </p>
                            </div>
                        </motion.div>
                        <motion.div initial={{opacity:0, x:-250 }} animate={{opacity:1, x:0}} transition={{duration:1.5}} className="fr-header__service">
                            <a href="/" title="">
                                <p  className="fr-header__service-title">
                                    Zone de test React
                                </p>
                            </a>
                            <motion.p initial={{opacity:0, x:-25 }} animate={{opacity:1, x:0}} transition={{duration:1.5}} className="fr-header__service-tagline">je teste des trucs</motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </header>
}
