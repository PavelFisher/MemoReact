import {Card} from "./Card.tsx";
import {useEffect, useState, useMemo} from "react";
import {ScoreBar} from "./ScoreBar.tsx";

function Board() {

    const [fetchedCards, setFetchedCards] = useState<
        {
            id: number;
            click: boolean;
            found: boolean;
            numberImg: number;
        }[]
    >([]);
    const [selectedCardId1, setSelectedCardId1] = useState<number>();
    const [selectedCardId2, setSelectedCardId2] = useState<number>();
    const [point, setPoint] = useState<number>(0);


    const board = useMemo(() => {
        return fetchedCards.map((card) => card);
    }, [fetchedCards]);

    useEffect(() => {


        (async () => {

            if (fetchedCards.length === 0) {
                try {
                    let id = 1;
                    const cards = [];
                    for (let count = 12; count > 0; count--) {
                        cards.push({id: id, click: false, found: false, numberImg: count});
                        id++;
                        cards.push({id: id, click: false, found: false, numberImg: count});
                        id++;
                    }

                    setFetchedCards(cards.sort(function () {
                        return Math.random() - 0.5;
                    }).sort(function () {
                        return Math.random() - 0.5;
                    }));
                } catch (error) {
                    console.error("Failed to fetch users:", error);
                }

            } else {

                if (selectedCardId2 != undefined) {
                    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
                    await delay(1000); // Задержка 1 секунда
                    const foundCard1 = fetchedCards.find((card) => card.id === selectedCardId1);

                    if (foundCard1?.numberImg ===
                        fetchedCards.find((card) => card.id === selectedCardId2)?.numberImg) {
                        setFetchedCards(fetchedCards =>
                            fetchedCards.map(card =>
                                card.numberImg === foundCard1?.numberImg ? {
                                    ...card,
                                    click: false,
                                    found: true,
                                } : card// создаем новый объект для измененного элемента
                            )
                        );
                        setPoint(point + 100);
                    } else {
                        setFetchedCards(fetchedCards =>
                            fetchedCards.map(card =>
                                card.id === selectedCardId1 || card.id === selectedCardId2 ? {
                                    ...card,
                                    click: false
                                } : card// создаем новый объект для измененного элемента
                            )
                        );
                        if (point >= 10) setPoint(point - 10);
                    }

                    setSelectedCardId1(undefined);
                    setSelectedCardId2(undefined);

                }

            }


        })();

    }, [fetchedCards, selectedCardId1, selectedCardId2]);

    const handleClick = (Id: number) => {

        if (selectedCardId1 === undefined) {
            setSelectedCardId1(Id);
        } else if (selectedCardId2 === undefined)
            setSelectedCardId2(Id);
        else return;

        const foundCard = fetchedCards.find((card) => card.id === Id);

        setFetchedCards(fetchedCards =>
            fetchedCards.map(card =>
                card.id === foundCard?.id ? {...card, click: true} : card // создаем новый объект для измененного элемента
            )
        );

    };

    function clearCards() {
        setFetchedCards([]);
        setSelectedCardId1(undefined);
        setSelectedCardId2(undefined);
        setPoint(0);
    }

    return <>
        <ScoreBar clearCards={clearCards} point={point}></ScoreBar>
        <div className="container">
            {board.map((card) => (

                <div key={card.id} onClick={() => {
                    // handleClick(card.numberImg)
                }}>
                    <Card id={card.id} clicked={card.click} found={card.found}
                          numberImg={card.numberImg} onClick={handleClick}/>
                </div>

            ))}
        </div>
    </>
}

export default Board