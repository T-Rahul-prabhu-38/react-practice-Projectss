import { useParams, useLocation,Navigate } from 'react-router-dom'

const PostItem = () =>{
    let params = useParams();
    let location = useLocation();

    console.log(location)
    return(
        <>
            <div>Post id = {params.id}</div>
        </>
    )
}

export default PostItem;