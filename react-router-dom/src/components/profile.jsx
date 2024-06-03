import { useNavigate, useSearchParams } from 'react-router-dom'

const Profile = () => {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();

  //http://localhost:5173/profile?profile=true#francis
  console.log(searchParams)

    return(
      <>
        <div>Profile</div>
        <button onClick={()=> navigate('/')}>Back home</button>
      </>
    )
  }
  
export default Profile;