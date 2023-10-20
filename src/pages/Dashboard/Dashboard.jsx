import useAuth from "../../hooks/useAuth";
import MemberDashboard from "./MemberDashboard";
import AdminDashboard from "./AdminDashboard";

const Dashboard = () => {
    const { status } = useAuth();
    if (status) {
      console.log(status);
    }
  return (
    <>
        {status && status === "admin" ? <AdminDashboard /> : <MemberDashboard /> }      
    </>
  )
}

export default Dashboard;
