import { useState } from "react";
import { BASE_URL } from "../utils/comman";

const Form = (props) => {
  const { mutate } = props ?? {};
  const [formData, setFormData] = useState({
    title: "",
  });

  function resetForm() {
    setFormData({
      title: "",
    });
  }

  const handleChange = (e) => {
    const { value, name } = e.target ?? {};
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadData = JSON.stringify({
      description: formData.title,
    });

    const response = await fetch(`${BASE_URL}/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: uploadData,
    });

    const result = await response.json();

    mutate(
      (prevData) => {
        return {
          data: [...prevData.data, result.data],
        };
      },
      { revalidate: false } // prevents revalidating the cache
    );
    resetForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Add comment"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
