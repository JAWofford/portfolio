import './Pill.css';

export default function Pill({ type, label}) {
    return (
        <span className={`pill pill-${type}`}>
            {label}
        </span>
    );
}