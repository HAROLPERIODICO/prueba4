import { card } from "./card"
import faviconhd from "../assets/images/faviconhd.png"
import logo75 from "../assets/images/logo75.png"
import bandera from "../assets/images/banderachm.png"

export const CardsContainer = () => {
  const services = [
    { id: 1,
      title: "Servicio 1",
      description: "Descripción del servicio 1",
      image: faviconhd,
      color: "blue"  // Añadido color para el primer servicio
    },
    {
        id: 2,
      title: "Servicio 2",
      description: "Descripción del servicio 2",
      image: logo75,
      color: "green"  // Añadido color para el segundo servicio
    },
    { id: 3,
      title: "Servicio 3",
      description: "Descripción del servicio 3",
      image: bandera,
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
