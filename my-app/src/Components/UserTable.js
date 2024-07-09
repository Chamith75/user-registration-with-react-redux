import { useSelector } from "react-redux";

const UserTable = () =>{
    let {userList}= useSelector((state) =>state.users)

    console.log(userList)
    return(
    <>
    <section className="d-flex justify-content-center"> 
      <div className= "row">
        <div className="col-8">
        <table className="table  table-bordered mt-4">
          <thead className="table-primary text-center">
            <tr>
              <th width="20%">sr no</th>
              <th width="40%">Name</th>
              <th width="40%">Email</th>
            </tr>

          </thead>
          <tbody>
            { userList.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-danger fw-bold"> No data to display</td>
              </tr>
            ) : null}
            {userList.map((User, index) => {
              return (
                <tr key={index}>
                  
                  <td >{index+1}</td>
                  <td >{User.userName}</td>
                  <td >{User.userEmail}</td>
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