export function ScoreBar({point, clearCards}: { clearCards: () => void; point: number }) {
    const handleClick = () => {
        clearCards();
    }
    return <div>
        <button onClick={handleClick} className="score">
            Заново
        </button>
        <button disabled className="point">
           Очки: {point}
        </button>
    </div>
}