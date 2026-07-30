import "./Pill.css"

export default function Pill({ type, name}) {
    return (
        <span className={`pill pill-${type}`}>
            {name}
        </span>
    );
}