import Database from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}
export function unEnrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const enrollmentIndex = enrollments.findIndex((e) => e.id === parseInt(courseId) && e.user === userId);
  enrollments.splice(enrollmentIndex, 1);
}

