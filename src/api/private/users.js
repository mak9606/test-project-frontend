import api from "../privateAPIConfig";

const endpoint = "/users";

export const getUserProfile = async (id) => {
  try {
    let url = endpoint + "/profile";
    const result = await api.get(url, { params: { id: id } });
    return result;
  } catch (err) {
    console.log(err, "err");
    return err.response.data;
  }
};
