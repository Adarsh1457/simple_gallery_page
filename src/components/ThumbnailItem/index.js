import './index.css'

const ThumbnailItem = props => {
  const {eachItem, sendOnclickOrg} = props
  const {thumbnailUrl, imageUrl, imageAltText, thumbnailAltText} = eachItem
  const sendOnclick = () => {
    sendOnclickOrg(imageAltText, imageUrl)
  }
  return (
    <li>
      <button type="button" onClick={sendOnclick}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
