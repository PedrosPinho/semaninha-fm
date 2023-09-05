import BasePanel from "../../components/BasePanel";
import "./UserPanels.css";

function UserPanels({ loading, top5, user }) {

  return (
    <div className="UserPanels">
        <BasePanel loading={loading} top5={top5} user={user} />
    </div>
  );
}

export default UserPanels;
