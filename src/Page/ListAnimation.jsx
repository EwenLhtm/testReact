import { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToggle } from "@uidotdev/usehooks";

const divVariants = {
    visible: {opacity: 1},
    hidden: {transition:{when:'afterChildren', staggerChildren:0.2}}
}
const liVariants = {
    visible: {x: 0, rotate: 0},
    hidden: {x: 950, rotate: 360}
}

export function ListAnimation ({onClick}) {
    const [open, toggle] = useToggle(true);
    const items = open ? [1,2,3,4] : [4,2]

    return (<main className="fr-pt-md-14v" role="main" id="content">
        <div className="fr-container fr-container--fluid fr-mb-md-14v">
        <div className="fr-grid-row fr-grid-row-gutters fr-grid-row--center">
            <motion.div animate={open ? 'visible' : 'hidden'} variants={divVariants}> 
            <ul>
                <AnimatePresence  mode="popLayout">
                    {items.map((item) => (
                    <MotionLi 
                    layout
                    variants={liVariants}
                    animate="visible"
                    initial="visible"
                    exit="hidden"
                    transition={{type:"spring"}}
                    key={item}>
                    {item}
                    </MotionLi>))}
                </AnimatePresence>
            </ul>
            </motion.div>
        </div>
        <div className="fr-grid-row fr-grid-row-gutters fr-grid-row--center">
            <button onClick={toggle} className="fr-btn">{open ? "Disparait" : "Apparait"}</button>
        </div>
        </div>
        <button className="fr-btn" onClick={(e) => onClick('mP')}>mode carte</button>
    </main>);
}

const Li = forwardRef(({children, key}, ref) => {
    return (
        <li className="fr-li" key={key} ref={ref}>
        {children}
        </li>
    );
});

const MotionLi = motion.create(Li);