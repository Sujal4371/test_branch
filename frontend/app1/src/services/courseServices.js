// src/services/adminCourseServices.js
import axios from "axios";
import config from "./config";

// NOTE: Change these endpoints to match your backend routes
// I am keeping them clean and standard.
// token is passed in headers like your getUser/changePassword :contentReference[oaicite:2]{index=2}

export async function getAllCourses(token) {
  const url = `${config.URL}/admin/courses`;
  const headers = { token };
  const res = await axios.get(url, { headers });
  return res.data;
}

export async function addCourse(token, course) {
  const url = `${config.URL}/admin/courses`;
  const headers = { token };
  const res = await axios.post(url, course, { headers });
  return res.data;
}

export async function updateCourse(token, courseId, course) {
  const url = `${config.URL}/admin/courses/${courseId}`;
  const headers = { token };
  const res = await axios.put(url, course, { headers });
  return res.data;
}

export async function deleteCourse(token, courseId) {
  const url = `${config.URL}/admin/courses/${courseId}`;
  const headers = { token };
  const res = await axios.delete(url, { headers });
  return res.data;
}

export async function getCourseById(token, courseId) {
  const url = `${config.URL}/admin/courses/${courseId}`;
  const headers = { token };
  const res = await axios.get(url, { headers });
  return res.data;
}
