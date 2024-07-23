import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { deleteuserfromserver, getuserListfromserver } from "../redux/User.Slice";
import axios from "axios";

const UserTable = () => {
  let dispatch = useDispatch();
  let {  userList } = useSelector((state) => state.users)
  
  

  
  useEffect(() => {
    dispatch(getuserListfromserver());
   
    console.log(userList)

  },[])
  let removeUser = async (id) => {
    try {
      let url = `http://localhost:3004/UserList/${id}`;
      console.log(url)
      await axios.delete(url, { id })
      // dispatch(deleteuserfromserver(id))
      Swal.fire({
        title: "Success!",
        text: "User removed successfully",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        dispatch(getuserListfromserver())
        
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Ok",
      });

    }
  }

  console.log(userList)
  return (
    <>
      <section className="d-flex justify-content-center">
        <div className="row">
          <div className="col-8">
            <table className="table  table-bordered mt-4">
              <thead className="table-primary text-center">
                <tr>
                  <th width="20%">sr no</th>
                  <th width="40%">Name</th>
                  <th width="40%">Email</th>
                  <th>Action</th>
                </tr>

              </thead>
              <tbody>
                {userList.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="text-danger fw-bold"> No data to display</td>
                  </tr>
                ) : null}
                {userList.map((User, index) => {
                  return (
                    <tr key={index}>

                      <td >{index + 1}</td>
                      <td >{User.userName}</td>
                      <td >{User.userEmail}</td>
                      <td className="d-flex justify-content-center" onClick={() => removeUser(User.id)}><i className="fa fa-trash btn btn-outline-danger" aria-hidden="true"></i> </td>
                    </tr>
                  );
                })}

              </tbody>

            </table>
          </div>
        </div>

      </section>

    </>);
}


export default UserTable;