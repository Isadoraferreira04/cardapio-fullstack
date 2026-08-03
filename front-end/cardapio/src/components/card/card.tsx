import "./card.css";

interface CardProps {
    price: number,
    title: string,
    image: string
}

export function Card({ price, image, title }: CardProps) {

    console.log(image);
    return (
        <div className="card">
            
            <img
  src={`http://localhost:8080/images/${image}`}
  alt={title}
/>
            <h2>{title}</h2>
            <p>
                <b>Valor:</b> R$ {price}
            </p>
        </div>
    );
}