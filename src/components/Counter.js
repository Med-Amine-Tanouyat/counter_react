import { useState } from "react";

const Counter = () => {
    //on a besoin du state pour gérer le compteur et son affichage
    const [counter, setCounter] = useState(0);

    //mettre à jour le compteur(à travers state) quand on clique sur '-'
    const decrementCounter = () => {
        setCounter(counter => counter - 1)
    }

    //mettre à jour le compteur(à travers state) quand on clique sur '+'
    const incrementCounter = () => {
        setCounter(counter => counter + 1)
    }

    /* on choisit de definir une variable de couleur pour l'affichage du compteur et traiter les cas,
    car on a trois cas et donc trois couleurs(rouge, bleu, et noir pour la valeur 0 du compteur)
    si on avait deux choix, on pourrait juste faire "inline conditionnal rendering" "boolExpression ? val1 : val2*/
    var counterColor = ""
    if (counter > 0) {
        counterColor = "rgb(22, 124, 211)";
    }
    else if (counter < 0) {
        counterColor = "rgb(231, 1, 16)";
    }
    else {
        counterColor = "black";
    }

    return (
        <div className="counter-container">
            <span className="counter-display" style={{color : counterColor}}>
                {counter}
            </span>
            <div className="counter-control">
                <button id="counter-minus" onClick={decrementCounter}>-</button>
                <button id="counter-plus" onClick={incrementCounter}>+</button>
            </div>
            {counter >= 10 && <p id="positive-text">Continuez !</p>}
            {counter <= -10 && <p id="negative-text">Ne cherchez plus le négatif !</p>}     
        </div>
    )
}
export default Counter;