import React from "react";
import Header from "../Header";

function AddRecordRight() {
  return (
    <div className="flex flex-col w-1/2">
      <div className="flex flex-col ">
        <Header text="Payee" />
        <select className="select select-bordered w-full">
          <option disabled selected>
            Write here
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <div>
        <Header text="Note" />
        <textarea
          placeholder="Bio"
          className="textarea textarea-bordered textarea-lg w-full h-[300px]"
        ></textarea>
      </div>
    </div>
  );
}

export default AddRecordRight;
