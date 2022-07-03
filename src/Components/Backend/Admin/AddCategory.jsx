import React, { useState } from "react";
import Swal from "sweetalert2";
import Translate from "./../../Translate";
import useAuth from "./../../../Hooks/useAuth";
const AddCategory = () => {
  const { trans } = useAuth();
  const [category, setCategory] = useState("");
  const [catFile, setCatFile] = useState("");
  const [preLoading, setPreLoading] = useState(false);

  const addCategory = async (e) => {
    setPreLoading(true);
    const formData = new FormData();
    formData.append("file", catFile);
    formData.append("upload_preset", "elearning");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/elearning-hub/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const file = await res.json();
    const catUp = { preview: file.url, category };
    console.log(file);
    if (file.asset_id) {
      fetch("https://cryptic-temple-44121.herokuapp.com/category", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(catUp),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setPreLoading(false);
            Swal.fire({
              position: "center-center",
              icon: "success",
              title: "Instructor Added Successfully",
              showConfirmButton: false,
              timer: 2500,
            });
            setCategory("");
          }
        });
    }
  };
  return (
    <div className="bg-white rounded">
      <div className="row align-items-center py-4 px-5">
        <div className="col-md-2">
          <label
            htmlFor="addCategory"
            className="form-label d-flex justify-content-between align-items-center"
          >
            <span className="fs-5">
              {" "}
              <Translate text="Category" type={trans} />
            </span>
          </label>
        </div>
        <div className="col-md-4">
          <div className="my-4">
            <input
              onChange={(e) => setCategory(e.target.value)}
              defaultValue={category}
              name="category"
              type="text"
              className="form-control"
              id="addCategory"
              aria-describedby="emailHelp"
              placeholder="Category Name"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="my-4">
            <input
              onChange={(e) => setCatFile(e.target.files[0])}
              name="categoryPic"
              type="file"
              className="form-control"
              id="addCategoryFile"
            />
          </div>
        </div>
        <div className="col-md-3">
          {preLoading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">
                {" "}
                <Translate text="Loading..." type={trans} />
              </span>
            </div>
          ) : (
            <button
              onClick={addCategory}
              type="button"
              className="btn btn-dark d-inline-block"
            >
              <Translate text="Add Category" type={trans} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
