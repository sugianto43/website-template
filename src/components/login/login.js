import "./login.css";
import logo from "../../assets/img/color-logo.svg";
import { Link } from "react-router-dom";
// import logo2 from "../../assets/img/logo-big.svg";

function Login() {
  return (
    <div className="containers">
      <div className="form-login mt-2 hv-center">
        <form>
          <img src={logo} alt="logo" className="logo-login"></img>
          <div className="form-group text-left">
            <p className="welcome-texts">
              Welcome Back, Please login into your account
            </p>
            <label>Username/Email</label>
            <input
              type="phone"
              className="form-control"
              id="phone"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group text-left">
            <label>Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <hr />
          <Link to="homes" style={{textDecoration: 'none', color: 'White', marginLeft:'0px'}}>
          <button
            type="submit"
            className="btn col-12 btn-primary btn-sign"
            value="submit"
          >
            Sign In
          </button>
          </Link>
        </form>
      </div>
      <div className="side">
        {" "}
        <menu></menu>
        {/* <img alt='logo big' className='logo-big' src={logo2}></img> */}
      </div>
    </div>
  );
}

export default Login;
