import './index.css'

const DestinationItem = props => {
  const {imageDetails} = props
  const {name, imgUrl} = imageDetail
  return (
    <li>
      <img alt="name" className="image" src={imgUrl} />
      <p className="text">{name}</p>
    </li>
  )
}

export default DestinationItem
