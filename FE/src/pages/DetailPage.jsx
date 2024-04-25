import { useParams } from "react-router-dom";
import useSWR from "swr";
import { BASE_URL } from "../utils/comman";
import { useState } from "react";

const DetailPage = () => {
  const params = useParams();
  const { data: todo, mutate } = useSWR(`${BASE_URL}/${params.id}`, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  const { data } = todo ?? {};

  const [formData, setFormData] = useState({
    description: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      const data = JSON.stringify({
        description: formData.description,
      });
      const response = await fetch(`${BASE_URL}/update/${params.id}`, {
        method: "PATCH",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        mutate();
        setFormData({
          description: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="detail-container">
      <div className="card">
        <h2>Detail Page</h2>
        <div className="detail-wrapper">
          <table>
            <tr>
              <td>Id</td>
              <td>{data?._id}</td>
            </tr>
            <tr>
              <td>Created At</td>
              <td>{data?.createdAt}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>
                <input
                  type="text"
                  name="description"
                  value={formData?.description}
                  placeholder={data?.description}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </table>
          <button
            className="update-btn"
            disabled={formData.description ? false : true}
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
