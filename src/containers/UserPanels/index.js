import BasePanel from "../../components/BasePanel";
import "./UserPanels.css";

function UserPanels({ loading, top5, user }) {

  return (
    <div className="UserPanels">
      {loading ? (
       <h3>Buscando as informações, peraaii!</h3>
      ) : (
        <BasePanel loading={loading} top5={top5} user={user} />
      )}
    </div>
  );
}

export default UserPanels;
