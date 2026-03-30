import { Back, cardIconsFactory } from './components/icons';

export function Card({id, clicked, found, numberImg, onClick}: {
    id: number;
    clicked: boolean;
    found:boolean;
    numberImg: number;
    onClick: (id: number) => void;
}) {
    const Icon = clicked && cardIconsFactory[numberImg] != null
        ? cardIconsFactory[numberImg]
        : Back;   

    const handleClick = () => {
        onClick(id);
    };

    if (found) {
        return (
            <button className="card-empty" disabled>
            </button>)
    } else {
        return (
            <button className="card" onClick={handleClick}>
                <Icon className="image" alt="Card" />
            </button>)
    }
}
export default Card;
