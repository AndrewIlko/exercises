import axios from "./axios";

export const fetchExercisesRequest = (params: string) =>
  axios
    .get(`/v1/exercises/${params ? "?" + params : ""}`)
    .then((res) => res.data);
