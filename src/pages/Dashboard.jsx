import  { useContext } from 'react';
  import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from 'react-router';
  
const Dashboard = () => {

  const {user , logout} = useContext(AuthContext)
  const navigate = useNavigate()

  if (!user) {  
    return <h1>loading ............</h1>
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl">Welcome, {user.username}!</h2>
      <button onClick={() => { logout(); navigate("/"); }} className="bg-red-500 text-white px-4 py-2 mt-2 rounded">
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
