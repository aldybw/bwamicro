import axios from "configs/axios";
const constants = {
  all: () => axios.get(`/courses`).then((res) => res.data),
  details: (id) => axios.get(`/courses/${id}`).then((res) => res.data),
};

export default constants;
