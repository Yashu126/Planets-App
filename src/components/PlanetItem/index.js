import './index.css'

const PlanetItem = props => {
  const {planetItem} = props
  const {imageUrl, name, description} = planetItem
  return (
    <div className="planet-con">
      <img src={imageUrl} alt={`planet ${name}`} width={300} />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
