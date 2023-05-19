import api from "../PublicAPIConfig";

const endpoint = "/users";

export const login = async (email, password) => {
  try {
    let url = endpoint + "/login";
    const result = await api.post(url, JSON.stringify({ email, password }));
    localStorage.setItem("Access_Token", result.data.accessToken);
    localStorage.setItem("userId", result.data.user.id);
    window.dispatchEvent(new Event("storage"));

    return result;
  } catch (err) {
    console.log(err, "err");
    return err.response.data;
  }
};

export const register = async (name, email, password) => {
  try {
    let url = endpoint + "/signup";
    const result = await api.post(url, { name, email, password });
    return result;
  } catch (err) {
    console.log(err, "err");
    return err.response.data;
  }
};
