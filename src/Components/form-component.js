// FormComponent.jsx
import React from "react";
//import "./Style.css";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      phone: "",
      country: "",
      city: "",
      pan: "",
      aadhar: "",
      showPassword: false,
      errors: {},
      isFormSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });

    return;
  }

  handleBlur(event) {
    const { name } = event.target;

    this.validateField(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    const formFields = [
      "firstName",
      "lastName",
      "username",
      "email",
      "password",
      "phone",
      "country",
      "city",
      "pan",
      "aadhar",
    ];
    let isValid = true;
    formFields.forEach((field) => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) {
      this.setState({ isFormSubmitted: true });
    }
  }

  validateField(name) {
    let errors = this.state.errors;
    let isValid = true;

    switch (name) {
      case "firstName":
        if (!this.state.firstName.trim()) {
          errors.firstName = "First Name is required";
          isValid = false;
        } else {
          errors.firstName = "";
        }
        break;

      case "lastName":
        if (!this.state.lastName.trim()) {
          errors.lastName = "Last Name is required";
          isValid = false;
        } else {
          errors.lastName = "";
        }
        break;

      case "username":
        if (!this.state.username.trim()) {
          errors.username = "Username is required";
          isValid = false;
        } else {
          errors.username = "";
        }
        break;

      case "email":
        if (!this.state.email.trim()) {
          errors.email = "Email is required";
          isValid = false;
        } else if (!emailValidator.test(this.state.email)) {
          errors.email = "Email is not valid";
          isValid = false;
        } else {
          errors.email = "";
        }
        break;

      case "password":
        if (!this.state.password.trim()) {
          errors.password = "Password is required";
          isValid = false;
        } else if (!passwordValidator.test(this.state.password)) {
          errors.password =
            "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";
          isValid = false;
        } else {
          errors.password = "";
        }
        break;

case "phone":
      if (!this.state.phone.trim()) {
        errors.phone = "Phone number is required";
        isValid = false;
      } else if (!/^\d{10}$/.test(this.state.phone)) {
        errors.phone = "Phone number must be 10 digits";
        isValid = false;
      } else {
        errors.phone = "";
      }
      break;

      case "country":
        if (!this.state.country.trim()) {
          errors.country = "Country is required";
          isValid = false;
        } else {
          errors.country = "";
        }
        break;

      case "city":
        if (!this.state.city.trim()) {
          errors.city = "City is required";
          isValid = false;
        } else {
          errors.city = "";
        }
        break;

      case "pan":
        if (!this.state.pan.trim()) {
          errors.pan = "PAN number is required";
          isValid = false;
        } else {
          errors.pan = "";
        }
        break;

      case "aadhar":
        if (!this.state.aadhar.trim()) {
          errors.aadhar = "Aadhar number is required";
          isValid = false;
        } else {
          errors.aadhar = "";
        }
        break;

      default:
        break;
    }

    this.setState({ errors });
    return isValid;
  }

  render() {
    return (
      <div className="main">
        <h3>SignUp Form</h3>
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>
            <div>Username: {this.state.username}</div>
            <div>Email: {this.state.email}</div>
            <div>Phone: {this.state.phone}</div>
            <div>Country: {this.state.country}</div>
            <div>City: {this.state.city}</div>
            <div>PAN No: {this.state.pan}</div>
            <div>Aadhar No: {this.state.aadhar}</div>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {this.state.errors.firstName && (
                <span className="errorMsg">{this.state.errors.firstName}</span>
              )}
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {this.state.errors.lastName && (
                <span className="errorMsg">{this.state.errors.lastName}</span>
              )}
            </div>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {this.state.errors.username && (
                <span className="errorMsg">{this.state.errors.username}</span>
              )}
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {this.state.errors.email && (
                <span className="errorMsg">{this.state.errors.email}</span>
              )}
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type={this.state.showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              <button
                type="button"
                onClick={() =>
                  this.setState({ showPassword: !this.state.showPassword })
                }
              >
                Show/Hide
              </button>
              {this.state.errors.password && (
                <span className="errorMsg">{this.state.errors.password}</span>
              )}
            </div>
            <div>
              <label htmlFor="phone">Phone No:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {this.state.errors.phone && (
                <span className="errorMsg">{this.state.errors.phone}</span>
              )}
            </div>
            <div>
              <label htmlFor="country">Country:</label>
              <select
                id="country"
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
              </select>
              {this.state.errors.country && (
                <span className="errorMsg">{this.state.errors.country}</span>
              )}
            </div>
            <div>
              <label htmlFor="city">City:</label>
              <select
                id="city"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              >
                <option value="">Select City</option>
                {this.state.country === "India" && (
                  <>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                  </>
                )}
                {this.state.country === "USA" && (
                  <>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                  </>
                )}
                {this.state.country === "Canada" && (
                  <>
                    <option value="Toronto">Toronto</option>
                    <option value="Vancouver">Vancouver</option>
                  </>
                )}
              </select>
              {this.state.errors.city && (
                <span className="errorMsg">{this.state.errors.city}</span>
              )}
            </div>
            <div>
              <label htmlFor="pan">PAN No:</label>
              <input
                type="text"
                id="pan"
                name="pan"
                value={this.state.pan}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {this.state.errors.pan && (
                <span className="errorMsg">{this.state.errors.pan}</span>
              )}
            </div>
            <div>
              <label htmlFor="aadhar">Aadhar No:</label>
              <input
                type="text"
                id="aadhar"
                name="aadhar"
                value={this.state.aadhar}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {this.state.errors.aadhar && (
                <span className="errorMsg">{this.state.errors.aadhar}</span>
              )}
            </div>
            <button
              type="submit"
              disabled={Object.values(this.state.errors).some(
                (error) => error
              )}
            >
              Signup
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default FormComponent;
