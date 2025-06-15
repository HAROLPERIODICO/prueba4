import { card } from "./card"
import logo75 from "../assets/design/logo75.png"
 

export const CardsContainer = () => {
  const services = [
    { id: 1,
      title: "Servicio 1",
      description: "Descripción del servicio 1",
      image: "",
      color: "blue"  // Añadido color para el primer servicio
    },
    {
        id: 2,
      title: "Servicio 2",
      description: "Descripción del servicio 2",
      image: "",
      color: "green"  // Añadido color para el segundo servicio
    },
    { id: 3,
      title: "Servicio 3",
      description: "Descripción del servicio 3",
      image: "https://via.placeholder.com/150",
        color: "red"  // Añadido color para el tercer servicio
    },
  ]  
    return (
        <div className="cards-container">
        {services.map((service) => (
            <div key={service.id} className="card" style={{ backgroundColor: service.color }}>
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            </div>
        ))}
        </div>
    )
}
// Este componente CardsContainer renderiza una lista de servicios como tarjetas
