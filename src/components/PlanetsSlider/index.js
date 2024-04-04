import './index.css'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="background-con" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem key={each.id} planetItem={each} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
