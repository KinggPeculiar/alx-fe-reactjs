import { useContext } from "react";
import UserContext from "../javascript/UserContext"; // adjust path if needed

function UserProfile() {
    const userData = useContext(UserContext); // ✅ pull data from context

    return (
        <div>
            <h2>{userData.name}</h2>
            <p>Age: {userData.age}</p>
            <p>Bio: {userData.bio}</p>
        </div>
    );
}

export default UserProfile;
