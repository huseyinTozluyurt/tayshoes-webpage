import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div className="admin-container">
      <h2>Admin Page</h2>
      <div className="admin-wrapper">
        <Link to="/admin/addProduct" className="admin-box">Add Product</Link>
        <Link to="/admin/removeProduct" className="admin-box">Remove Product</Link>
        <Link to="/admin/updateProduct" className="admin-box">Update Product</Link>
        <Link to="/admin/removeUser" className="admin-box">Remove User</Link>
        <Link to="/admin/viewOrders" className="admin-box">View Orders</Link>
        <Link to="/admin/viewUsers" className="admin-box">View Users</Link>
        <Link to="/admin/removeOrder" className="admin-box">Remove Oder</Link>
        <Link to="/admin/manageDatabase" className="admin-box">Manage Database</Link>
      </div>
    </div>
  );
}

export default Admin;
