import { useParams } from "react-router"

const Collection = () => {

    const params = useParams()
    const collectionId = params.collectionId;

    

  return (
    <div>Collection</div>
  )
}

export default Collection