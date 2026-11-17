
function Profile() {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="container mt-5">
            <div className="card bg-dark text-white p-4 mx-auto" style={{ maxWidth: "500px" }}>
                <h2 className="text-danger mb-4">My Profile</h2>

                <p><strong>Name:</strong> {user?.fullName || "Not available"}</p>
                <p><strong>Email:</strong> {user?.email || "Not available"}</p>
                <p><strong>Role:</strong> {user?.role?.rolename || user?.role || "USER"}</p>
            </div>
        </div>
    );
}

export default Profile;
