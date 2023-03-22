import { useState } from "react";

const Card = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zipPostal: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log("finally printing the value of form data");
    console.log(formData);
  };
  return (
    <div className="wrapper">
      <div className="container">
        <form className="form" onSubmit={submitHandler}>
          <label className="text" htmlFor="firstName">
            First Name{" "}
          </label>
          <input
            className="input"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter Your First Name"
            onChange={changeHandler}
            value={formData.firstName}
          ></input>

          <br />
          <label className="text" htmlFor="lastName">
            Last Name{" "}
          </label>
          <input
            className="input"
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            placeholder="Enter Your Last Name"
            onChange={changeHandler}
          ></input>

          <br />
          <label className="text" htmlFor="email">
            Email Address{" "}
          </label>
          <input
            className="input"
            type="email"
            placeholder="Enter Your Email Address"
            onChange={changeHandler}
            value={formData.email}
            id="email"
            name="email"
          ></input>
          <br />
          <label className="text" htmlFor="country">
            Country
          </label>
          <select
            name="country"
            id="country"
            onChange={changeHandler}
            className="input"
          >
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option vlaue="US">US</option>
          </select>
          <br />
          <label className="text" htmlFor="stAdd">
            Street Address{" "}
          </label>
          <input
            className="input"
            type="text"
            onChange={changeHandler}
            value={formData.street}
            id="stAdd"
            placeholder="Ganpati vihar.."
            name="street"
          />
          <br />

          <label className="text" htmlFor="city">
            City
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter Your City"
            id="city"
            onChange={changeHandler}
            value={formData.city}
            name="city"
          />
          <br />

          <label className="text" htmlFor="state">
            State/Province{" "}
          </label>
          <input
            className="input"
            type="text"
            placeholder="Madhya Pradesh"
            id="state"
            name="state"
            onChange={changeHandler}
            value={formData.state}
          ></input>
          <br />

          <label className="text" htmlFor="zip">
            ZIP/Postal Code{" "}
          </label>
          <input
            className="input"
            type="text"
            placeholder="482003"
            id="zip"
            onChange={changeHandler}
            value={formData.zipPostal}
            name="zipPostal"
          ></input>
          <br />

          <fieldset>
            <legend className="text">Email</legend>
            <div className="field-content">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                checked={formData.comments}
                onChange={changeHandler}
              ></input>
              <div>
                <label htmlFor="comments" className="text">
                  comments
                </label>
                <p className="text">
                  Get notified when someones posts a comment on a posting
                </p>
              </div>
            </div>

            <div className="field-content">
              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                checked={formData.candidates}
                onChange={changeHandler}
              ></input>
              <div>
                <label htmlFor="candidates" className="text">
                  Candidates
                </label>
                <p className="text">
                  Get notified when a candidate applies for a job
                </p>
              </div>
            </div>

            <div className="field-content">
              <input
                type="checkbox"
                id="offers"
                name="offers"
                checked={formData.offers}
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="offers" className="text">
                  Offers
                </label>
                <p className="text">
                  Get notified when a candidate accepts or rejects an offer
                </p>
              </div>
            </div>
          </fieldset>
          <br />

          <fieldset className="fieldset">
            <legend className="text">Push Notifications</legend>
            <p className="text">
              These are delivered via SMS to your mobil phone
            </p>
            <div className="field-content">
              <input
                type="radio"
                id="pushEverything"
                name="pushNotifications"
                value="Everything"
                onChange={changeHandler}
              />
              <label htmlFor="pushEverything" className="text">
                Everything
              </label>
              <br />
            </div>

            <div className="field-content">
              <input
                type="radio"
                id="pushEmail"
                name="pushNotifications"
                value="same as email"
                onChange={changeHandler}
              />
              <label htmlFor="pushEmail" className="text">
                Same as email
              </label>
              <br />
            </div>

            <div className="field-content">
              <input
                type="radio"
                id="pushNothing"
                name="pushNotifications"
                value="No push Notification"
                onChange={changeHandler}
              />
              <label htmlFor="pushNothing" className="text">
                No push notifications
              </label>
              <br />
            </div>
          </fieldset>

          <button className="btn">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Card;
