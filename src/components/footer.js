import React from "react";

const Footer = () => {
  const mystyle = {
    phantom: {
      display: "block",
      padding: "20px",
      height: "60px",
      width: "100%",
    },
    footer: {
      backgroundColor: "#6C63FF",
      color: "#fff",
      textAlign: "center",
      padding: "10px",
      position: "fixed",
      left: "0",
      bottom: "0",
      height: "80px",
      width: "100%",
    },
    title: {
      letterSpacing: "1px",
    },
    socials: {
      display: "flex",
      justifyContent: "center",
      padding: "5px 0",
    },
    social: {
      margin: "0 5px",
    },
  };

  return (
    <div>
      <div style={mystyle.phantom} />
      <div style={mystyle.footer}>
        <div style={mystyle.title}>Developed by Yashdeep Bachhas</div>
        <div style={mystyle.socials}>
          <div style={mystyle.social}>
            <i className="fab fa-github fa-2x"></i>
          </div>
          <div style={mystyle.social}>
            <i className="fab fa-linkedin fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
