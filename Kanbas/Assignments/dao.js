import Database from "../Database/index.js";
export function findAssignmentsForCourse(courseID) {
    const { assignments } = Database;
    const assignmentsForCourse = assignments.filter((assignment) => assignment.course === courseID);
    return assignmentsForCourse;
}
export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: Date.now().toString() };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}
export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}
export function updateAssignment(assignmentId, assignmentUpdates) {
    const {assignments} = Database;
    const assignment = assignments.find((assignment) => assignment._id = assignmentId)
    Object.assign(assignment, assignmentUpdates)
    return assignment
}


  
  
