import { Link, Route, Routes } from "react-router-dom";
import UserList from "./userslist";
import Products from "./Products";

function Dashboard() {
    return (
        <div className="container">
            <h3>Dashboard Component</h3>
            <ul className="nav nav-tabs">

                <li className="nav-item">
                    <Link class="nav-link" to="list">Manage Users</Link>
                </li>
                <li className="nav-item">
                    <Link class="nav-link" to="products">Manage Products</Link>
                </li>
            </ul>
            <Routes>
                <Route path="list" element={<UserList/>} />
                <Route path="products" element={<Products />} />
            </Routes>
        </div>
    );
}

export default Dashboard;