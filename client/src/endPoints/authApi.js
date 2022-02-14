const baseUrl = "http://localhost:8000/api/users";

const login = async (data) => {
  try {
    const user = await fetch(`${baseUrl}/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};

export { login };
