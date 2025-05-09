type imageWithDefaultProps = {
  srcImage: string
  defaultSrc: string
  altInfo: string
}

/**
 * Represents a Image component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.srcImage - The source image
 * @param {string} props.defaultSrc - The alternative image if the source image is broken
 * @param {string} props.altInfo - Alternative text for image
 * @returns {React.ReactElement} Image with default Image URL.
 */

const ImageWithDefault = ({
  srcImage,
  defaultSrc,
  altInfo,
}: imageWithDefaultProps): React.ReactElement => {
  const handleError = (ev: any) => {
    ev.target.src = defaultSrc
    ev.target.alt = 'Broken Image'
  }

  return <img src={srcImage} onError={handleError} alt={altInfo} />
}

export default ImageWithDefault
