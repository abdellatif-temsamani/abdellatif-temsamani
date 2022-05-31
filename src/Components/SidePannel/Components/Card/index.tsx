import './Card.css';

type Props = {
    title: string,
    children: React.ReactNode,
};

const Card: React.FC<Props> = ({ title, children }) => (
    <div className="Card">
        <h1>{title}</h1>

        {children}

    </div>
);

export default Card;

