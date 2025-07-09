exports.handler = async (event, context) => {
  const { email, password } = JSON.parse(event.body);

  if (email === "test@example.com" && password === "password123") {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Login successful" }),
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ success: false, message: "Invalid credentials" }),
  };
};
