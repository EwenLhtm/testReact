import { useCallback, useEffect, useState } from "react"
import { Input } from "./Elements/Input"
import { useFetch } from "../Hooks/useFetch";
import CircleLoader from "./Elements/CircleLoader";

export function Game({onClick}) {
    const [lettre, setLettre] = useState("");
    const [guess,setGuess] = useState("");
    const [count,setCount] = useState(0);
    const [victoire, setVictoire] = useState(false);
    const [defaite, setDefaite] = useState(false);
    const {data, loading, errors, refetch} = useFetch('https://random-word-api.herokuapp.com/word?lang=fr');
    const [indice, setIndice] = useState("");
    const [listLettre, setListeLettre] = useState([]);

    useEffect(() => {
        if (data) {
            let startIndice = "_".repeat(data.length);
            setIndice(startIndice);
        }
    }, [data]);

    const handleChange = useCallback((lettre, count) => {
        if (!lettre.match(/[a-z]/i)){
            setLettre("");
        }else if (!listLettre.includes(lettre)){
            setListeLettre([...listLettre,lettre,].sort());
            setLettre("");
            setGuess("");
            let actualCount = count + 1;
            setCount(actualCount);
            let newIndice = "";
            for (let i = 0; i < data.length; i++) {
                if (lettre === data[i]) {
                    newIndice = newIndice + lettre;
                } else {
                    newIndice = newIndice + indice[i];
                }
            }
            setIndice(newIndice);
            if (newIndice === data) {
                setVictoire(true);
            } else if (actualCount >= data.length + 5) {
                setDefaite(true);
            }
        }
    }, [data, indice,listLettre]);

    const finishGuess = useCallback((guess) => {
        if (guess === data) {
            setVictoire(true);
        } else {
            setDefaite(true);
        }
    }, [data]);

    const restart = ()=>{
        setLettre("");
        setGuess("");
        setCount(0);
        setVictoire(false);
        setDefaite(false);
        setListeLettre([]);
        refetch();
    };

    if (loading) return <CircleLoader></CircleLoader>;
    if (errors) return <div>Une erreur est survenue : {errors.message}</div>;
    if (data) {
        if (!victoire && !defaite){
            const listLettreVisu = listLettre.map(item => {
                let style = {}
                if (item == lettre){
                    style = {color:'red',fontSize:'35px',fontWeight:'bold'}
                }
                return <span key={item} style={style}>{item} </span>
            })
            return (
                <main className="fr-pt-md-14v" role="main" id="content">
                    <div className="fr-container fr-container--fluid fr-mb-md-14v">
                        <h1>Pendu mais sans l'image</h1>
                        <Input value={lettre} onChange={setLettre} onKeyDown={handleChange} count={count} maxLength={1}/>
                        <p>Il vous reste {data.length+5-count} essaye</p>
                        <Input value={guess} onChange={setGuess} onKeyDown={finishGuess}/>
                        <p className="fr-hint-text">Si le mot rendu est bon, vous gagnez. Si il est faux, vous perdez directement</p>
                        <p>lettre utilise : {listLettreVisu} </p>
                        <h3>Indice : {indice} </h3>
                    </div>
                </main>
                )
        }else{
            return (
                <main className="fr-pt-md-14v" role="main" id="content">
                    <div className="fr-container fr-container--fluid fr-mb-md-14v">
                        {defaite ? <h1>Perdu, le mot était {data}</h1> : <h1>Victoire, le mot était bien {data}</h1>}
                        <button className="fr-btn fr-ml-5w" onClick={(e) => onClick('mP')}>retour menu principal</button>
                        <button className="fr-btn fr-ml-5w" onClick={(e) => restart()}>recommencer</button>
                    </div>
                </main>
            )
        }
    }
}