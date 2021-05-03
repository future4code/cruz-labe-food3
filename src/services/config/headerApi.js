export const headerApi = () => {
  const token = localStorage.getItem("token");

  const header = { headers: { Auth: token } };

  return header;
};
