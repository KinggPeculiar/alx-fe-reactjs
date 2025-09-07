import UserInfo from "./UserInfo";

function ProfilePage() {   // ✅ no userData prop
  return (
    <div>
      <h1>Profile Page</h1>
      <UserInfo />   {/* ✅ no need to pass props */}
    </div>
  );
}


export default ProfilePage;