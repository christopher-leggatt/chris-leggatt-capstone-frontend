import { PageHeader } from "../../components/Typography/Typography";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
    const { isAdmin, isMember } = useAuth;
  return (
    <div>
        {isAdmin ? <PageHeader>This is the Admin Dashboard!</PageHeader> : <PageHeader>This is the Member Dashboard!</PageHeader> }      
    </div>
  )
}

export default Dashboard;
