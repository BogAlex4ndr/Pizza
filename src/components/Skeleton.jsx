import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
  className="pizza-block" 
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#e1dfdf"
    foregroundColor="#f5e1b8"
    {...props}
  >
    <circle cx="140" cy="140" r="125" /> 
    <rect x="20" y="350" rx="0" ry="0" width="240" height="75" /> 
    <rect x="30" y="300" rx="0" ry="0" width="220" height="25" /> 
    <rect x="130" y="440" rx="20" ry="20" width="130" height="35" /> 
    <rect x="20" y="440" rx="0" ry="0" width="75" height="35" />
  </ContentLoader>
)

export default Skeleton

