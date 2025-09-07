import { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
    const userData = useContext(UserContext);

    return (
        <div>
            <h2>User Details</h2>
            <p>{userData.name}</p>
            <p>{userData.email}</p>
            <p>{userData.role}</p>            
        </div>
    );
}

export default UserDetails;