export const ExternalLink = (props) => {
    console.log(props)
    const {content, link} = props
    return(<a className="btn home-bt" href={link} target="_blank" rel="noreferrer">{content}</a>)
}