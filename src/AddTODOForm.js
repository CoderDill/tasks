import React, { useState } from "react";
import "./AddTODOForm";
/** Form for creating a new item to add to a list.
 *
 * Has state for the task/quantity of the item; on submission,
 * sends {task, qty} to fn rec'd from parent.
 *
 */

const AddTODOForm = ({ addTask }) => {
  const INITIAL_STATE = { task: "", image: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {task, quantity} to parent
   *    & clear form. */

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTask(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input
        id="task"
        name="task"
        value={formData.task}
        onChange={handleChange}
      />
      <label htmlFor="image">Add Image</label>
      <input
        type="file"
        name="image"
        alt=""
        value={formData.image}
        onChange={handleChange}
      />
      <button>Add a new Task!</button>
    </form>
  );
};

export default AddTODOForm;
