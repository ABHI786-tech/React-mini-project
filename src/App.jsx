import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App



// import React, { useState } from 'react'
// import validator from 'validator'

// const CreditCardValidator = () => {
//   const [cardNumber, setCardNumber] = useState("");
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setCardNumber(value);

//     if (value === "") {
//       setMessage("");
//       return;
//     }

//     if (validator.isCreditCard(value)) {
//       setMessage("✔ Valid Credit Card Number");
//     } else {
//       setMessage("✖ Invalid Credit Card Number");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Credit Card Number Validator</h1>

//       <input
//         type="text"
//         placeholder="Enter credit card number"
//         value={cardNumber}
//         onChange={handleChange}
//         style={styles.input}
//       />

//       <p
//         style={{
//           ...styles.message,
//           color: message.startsWith("✔") ? "green" : "red",
//         }}
//       >
//         {message}
//       </p>
//     </div>
//   );
// };

// // Inline styling for simplicity
// const styles = {
//   container: {
//     textAlign: "center",
//     marginTop: "50px",
//     fontFamily: "Arial",
//   },
//   heading: {
//     marginBottom: "20px",
//     fontSize: "25px",
//   },
//   input: {
//     padding: "10px",
//     width: "300px",
//     fontSize: "18px",
//     borderRadius: "8px",
//     border: "1px solid #999",
//   },
//   message: {
//     marginTop: "20px",
//     fontSize: "20px",
//     fontWeight: "bold",
//   },
// }

// export default CreditCardValidator