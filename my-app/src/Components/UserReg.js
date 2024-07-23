import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { oninputChange, resetinput, SaveuserInserver } from "../redux/User.Slice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const UserReg = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate()


  let { userInput } = useSelector((state) => state.users)

  let inputChange = (event) => {
    let { name, value } = event.target
    let data = {
      name, value
    }
    dispatch(oninputChange(data))

  }

  let saveData = async () => {
    try {
      
      dispatch(SaveuserInserver({...userInput}))


      Swal.fire({
        title: "User Added Succefully!",
        text: "click ok to View!",
        icon: "success"
      }).then(() => {
        navigate('/user-list');

      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "click ok to View!",
        icon: "error"
      });

    }


  }

  useEffect(()=>{
    dispatch(resetinput())
  } ,[])
 let resetdata = () => {
  dispatch(resetinput())
 }


  return (
    <>
      <section className="d-flex justify-content-center mt-5 p-5  ">
        <div className="row ">
          <div className="col-12 card">
            <form >
              <div>
                <label className="col-sm-2 col-form-label">Name:</label>
                <input className="form-control" value={userInput.userName} name="userName" type="text" placeholder="Enter Name" onChange={inputChange}></input>
              </div>
              <div>
                <label className="col-sm-2 col-form-label">Email:</label>
                <input className="form-control" value={userInput.userEmail} name="userEmail" type="email" placeholder="Enter Email" onChange={inputChange}></input>
              </div>

              <div className="p-5  ">
                <button type="button" onClick={saveData} className="btn btn-outline-success p-3 me-5">
                  <i className="fa fa-user-plus" aria-hidden="true"></i>
                  Save
                </button >
                <button type="reset" className="btn btn-outline-danger p-3  me-5 " onClick={resetdata}>Reset</button>
              </div>

            </form>

          </div>
        </div>
      </section>

    </>
  );
};

export default UserReg;
