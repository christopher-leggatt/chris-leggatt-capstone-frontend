import { PageHeader } from "../../components/Typography/Typography";
import useAuth from "../../hooks/useAuth";
import MemberDashboard from "./MemberDashboard";

const Dashboard = () => {
    const { isAdmin, isMember } = useAuth;
  return (
    <>
        {isAdmin ? <PageHeader>This is the Admin Dashboard!</PageHeader> : <MemberDashboard /> }      
    </>
  )
}

export default Dashboard;
