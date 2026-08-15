const BASE_URL = "http://localhost:5000";

// =========================
// GET ALL TASKS
// =========================

export const getTasks = () => {
  return fetch(`${BASE_URL}/tasks`);
};

// =========================
// CREATE TASK
// =========================

export const createTask = (task) => {
  return fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
};

// =========================
// UPDATE TASK
// =========================

export const updateTask = (id, task) => {
  return fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
};

// =========================
// DELETE TASK
// =========================

export const deleteTask = (id) => {
  return fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });
};