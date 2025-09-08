   function Services() {
    const pageStyle = {
        textAlign: "center",
        padding: "50px",
        backgroundColor: "#fef6e4",
        minHeight: "80vh"
    };

    return (
       <div style={pageStyle}>
         <h1>Our Services</h1>
         <ul style={{ listStyleType: "none", padding: 0 }}>
           <li>Technology Consulting</li>
           <li>Market Analysis</li>
           <li>Product Development</li>
         </ul>
       </div>
    );
   }

   export default Services;