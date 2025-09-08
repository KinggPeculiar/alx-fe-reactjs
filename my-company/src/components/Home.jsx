   function Home() {
    const pageStyle = {
        textAlign: "center",
        padding: "50px",
        backgroundColor: "#f9f9f9",
        minHeight: "80vh"
    };

    const headingStyle = {
        fontSize: "36px",
        color: "#333"
    };

    const paragraphStyle = {
        fontSize: "18px",
        color: "#666"
    };

     return (
       <div style={pageStyle}>
         <h1 style={headingStyle}>Welcome to Our Company</h1>
         <p style={paragraphStyle}>We are dedicated to delivering excellence in all our services.</p>
       </div>
     );
   }

   export default Home;