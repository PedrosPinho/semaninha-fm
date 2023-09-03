import BasePanel from "../../components/BasePanel"
import "./UserPanels.css"

function UserPanels({ loading }) {
  return (
    <div className="UserPanels">
      <BasePanel loading={loading} />
    </div>
  );
}

export default UserPanels
