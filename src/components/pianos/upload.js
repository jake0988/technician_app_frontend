import axios from "axios";

export const uploadToAWS = async(auth_token, file, directory) => {
  const { data } = await API.get("/upload", {params: {filename: file.name, fileType: file.type, directory: directory}, headers: APIHelpers.authorizationHeaders(auth_token)});
  const { post_url, get_url } = data;
  const options = {
    headers: {"Content-Type": file.type,'acl': 'public-read'},
  }
  await axios.put(post_url, file, options)
  return get_url;
}

export const updateProject = (form, auth_token, fileToUpload) => async(dispatch) => {
  try {

    if (fileToUpload) {
      const image_url = await uploadToAWS(auth_token, fileToUpload, APIHelpers.projectImagePath())
      form.set("image_url", image_url);
    }

    const params = Object.fromEntries(form);
    await API.put(`/projects/${params.id}`, params, {headers: APIHelpers.authorizationHeaders(auth_token)})
    dispatch(flash(`${form.get("title")} was updated successfully`));
    dispatch(setProjectToEdit(null));
  } catch(error) {
    dispatch(flash(`Oops! We couldn't update that project, please try again`));
  }
};

export default axios.create({
  baseURL: `https://oluwadamilare-api.herokuapp.com`,
});

export const APIHelpers = {
  authorizationHeaders: (auth_token) => (
    {
      Authorization: auth_token, 
      "Content-Type": "application/json",
    }),
  projectImagePath: () => "project/images",
}