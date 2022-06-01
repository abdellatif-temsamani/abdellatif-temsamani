import './CardLink.css';

type Props = {
    title: string,
    children: React.ReactNode,
};

const CardLink: React.FC<Props> = ({ title, children }) => (
    <div className="CardLink">
        <h3>
            <b>{title}</b> <br />
            {children}
        </h3>
    </div>
);

export default CardLink;

