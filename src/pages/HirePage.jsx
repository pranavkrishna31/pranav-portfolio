import { useState } from "react";

function HirePage() {

  const [hireForm, setHireForm] = useState({
    name: "",
    company_name: "",
    email: "",
    role_title: "",
    message: "",
  });

  const handleHireChange = (e) => {

    setHireForm({
      ...hireForm,
      [e.target.name]: e.target.value,
    });

  };

  const submitHireForm = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "https://pranav-portfolio-1vp5.onrender.com/hire",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(hireForm),
        }
      );

      const data = await response.json();

      alert(data.message);

    } catch (error) {

      console.log(error);

      alert("Submission failed");

    }

  };

  return (

    <div className="hire-page">

      <div className="hire-container">

        <h1>Hire Me</h1>

        <p>
          Available for internships, backend,
          full-stack, and ML engineering roles.
        </p>

        <form
          className="hire-form"
          onSubmit={submitHireForm}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={hireForm.name}
            onChange={handleHireChange}
          />

          <input
            type="text"
            name="company_name"
            placeholder="Company Name"
            value={hireForm.company_name}
            onChange={handleHireChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={hireForm.email}
            onChange={handleHireChange}
          />

          <input
            type="text"
            name="role_title"
            placeholder="Role Title"
            value={hireForm.role_title}
            onChange={handleHireChange}
          />

          <textarea
            name="message"
            placeholder="Message"
            value={hireForm.message}
            onChange={handleHireChange}
          ></textarea>

<button
  type="submit"
  className="build-btn"
>
  Submit
</button>
        </form>

      </div>

    </div>

  );

}

export default HirePage;