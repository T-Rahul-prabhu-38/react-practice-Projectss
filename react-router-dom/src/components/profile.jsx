import { useNavigate, useSearchParams,Navigate } from 'react-router-dom'
import { useEffect,useState } from 'react';

const Profile = () => {


  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  //http://localhost:5173/profile?profile=true#francis
  console.log(searchParams)

  const [showProfile, setShowProfile] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowProfile(false);
    }, 3000);
    return () => clearTimeout(timeoutId); // Cleanup function to prevent memory leaks
  }, []);


  return(
      <>
        <div>Profile</div>
        <button onClick={()=> navigate('/')}>Back home</button>

        {!showProfile && <Navigate replace to='/' />}
      </>
    )
  }
  
export default Profile;