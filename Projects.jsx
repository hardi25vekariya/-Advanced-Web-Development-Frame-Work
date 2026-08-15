import talentTrack from "../assets/talenttrack.png";
import carParking from "../assets/car-parking.png";
import travelBloom from "../assets/travelbloom.png";
import game2048 from "../assets/2048-game.png";
import todoApp from "../assets/todo-app.jpg";
import portfolio from "../assets/portfolio.png";

import "./Projects.css";
import { useState, useEffect } from "react";

import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../api";

function Projects() {
  // =====================================================
  // TASK STATES
  // =====================================================

  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // =====================================================
  // FORM STATES
  // =====================================================

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");

  // =====================================================
  // CREATE STATES
  // =====================================================

  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState(null);

  // =====================================================
  // UPDATE STATES
  // =====================================================

  const [editingId, setEditingId] = useState(null);
  const [updating, setUpdating] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  // =====================================================
  // DELETE STATES
  // =====================================================

  const [deletingId, setDeletingId] = useState(null);
  const [deleteError, setDeleteError] = useState(null);

  // =====================================================
  // TOAST STATE
  // =====================================================

  const [toast, setToast] = useState(null);

  // =====================================================
  // PROJECT DATA
  // =====================================================

  const projectsData = [
    {
      id: 1,
      title: "Talent Track - Student Job Portal",
      description:
        "A full-stack student job portal that connects students with recruiters, allowing job searching, applications, profile management, and internship opportunities.",
      image: talentTrack,
      github: "https://github.com/hardi25vekariya/Talent-Track",
      live: "#",
    },

    {
      id: 2,
      title: "Smart Car Parking System",
      description:
        "An IoT-based smart parking solution combining hardware and software to detect available parking spaces.",
      image: carParking,
      github: "#",
      live: "#",
    },

    {
      id: 3,
      title: "TravelBloom Website",
      description:
        "A modern travel website built using HTML, CSS, JavaScript, and React.",
      image: travelBloom,
      github: "#",
      live: "#",
    },

    {
      id: 4,
      title: "2048 Game",
      description:
        "A browser-based 2048 game with smooth animations and responsive design.",
      image: game2048,
      github: "#",
      live: "#",
    },

    {
      id: 5,
      title: "To-Do Application",
      description:
        "A React-based task management application using Local Storage.",
      image: todoApp,
      github: "#",
      live: "#",
    },

    {
      id: 6,
      title: "Personal Portfolio Website",
      description:
        "A modern portfolio built with React featuring animations and responsive design.",
      image: portfolio,
      github: "#",
      live: "#",
    },
  ];

  // =====================================================
  // SHOW TOAST
  // =====================================================

  const showToast = (type, message) => {
    setToast({
      type,
      message,
    });
  };

  // =====================================================
  // AUTO HIDE TOAST
  // =====================================================

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timer = setTimeout(() => {
      setToast(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [toast]);

  // =====================================================
  // GET TASKS
  // =====================================================

  const fetchTasks = () => {
    setLoading(true);
    setError(null);

    getTasks()
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch tasks");
        }

        return res.json();
      })

      .then((data) => {
        setTasks(data);
      })

      .catch((err) => {
        setError(err.message);

        showToast(
          "error",
          err.message
        );
      })

      .finally(() => {
        setLoading(false);
      });
  };

  // =====================================================
  // INITIAL FETCH
  // =====================================================

  useEffect(() => {
    fetchTasks();
  }, []);

  // =====================================================
  // CREATE TASK - OPTIMISTIC UI
  // =====================================================

  const handleCreateTask = (e) => {
    e.preventDefault();

    setCreateError(null);

    // Prevent empty values
    if (!title.trim() || !description.trim()) {
      setCreateError(
        "Title and description are required"
      );

      showToast(
        "error",
        "Title and description are required"
      );

      return;
    }

    // Temporary ID for optimistic UI
    const temporaryId =
      `temp-${Date.now()}`;

    const optimisticTask = {
      _id: temporaryId,
      title: title.trim(),
      description: description.trim(),
      priority,
      completed: false,
      optimistic: true,
    };

    // =================================================
    // SHOW TASK IMMEDIATELY
    // =================================================

    setTasks((prevTasks) => [
      ...prevTasks,
      optimisticTask,
    ]);

    // Save form values before clearing
    const taskToSend = {
      title: title.trim(),
      description: description.trim(),
      priority,
      completed: false,
    };

    // Clear form immediately
    setTitle("");
    setDescription("");
    setPriority("low");

    setCreating(true);

    // =================================================
    // SEND TO SERVER
    // =================================================

    createTask(taskToSend)

      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Failed to create task"
          );
        }

        return res.json();
      })

      .then((createdTask) => {
        // Replace temporary task
        // with real MongoDB task
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === temporaryId
              ? createdTask
              : task
          )
        );

        showToast(
          "success",
          "Task created successfully!"
        );
      })

      .catch((err) => {
        // Remove optimistic task
        // if server request failed
        setTasks((prevTasks) =>
          prevTasks.filter(
            (task) =>
              task._id !== temporaryId
          )
        );

        setCreateError(err.message);

        showToast(
          "error",
          err.message
        );
      })

      .finally(() => {
        setCreating(false);
      });
  };

  // =====================================================
  // EDIT TASK
  // =====================================================

  const handleEditClick = (task) => {
    // Don't edit temporary optimistic task
    if (task.optimistic) {
      return;
    }

    setEditingId(task._id);

    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);

    setCreateError(null);
    setUpdateError(null);
    setDeleteError(null);
  };

  // =====================================================
  // UPDATE TASK
  // =====================================================

  const handleUpdateTask = (e) => {
    e.preventDefault();

    setUpdating(true);
    setUpdateError(null);

    const updatedTask = {
      title: title.trim(),
      description: description.trim(),
      priority,
    };

    updateTask(
      editingId,
      updatedTask
    )

      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Failed to update task"
          );
        }

        return res.json();
      })

      .then((updatedTaskFromServer) => {
        // Update local state
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === editingId
              ? updatedTaskFromServer
              : task
          )
        );

        // Exit edit mode
        setEditingId(null);

        // Clear form
        setTitle("");
        setDescription("");
        setPriority("low");

        showToast(
          "success",
          "Task updated successfully!"
        );
      })

      .catch((err) => {
        setUpdateError(err.message);

        showToast(
          "error",
          err.message
        );
      })

      .finally(() => {
        setUpdating(false);
      });
  };

  // =====================================================
  // CANCEL EDIT
  // =====================================================

  const handleCancelEdit = () => {
    setEditingId(null);

    setTitle("");
    setDescription("");
    setPriority("low");

    setUpdateError(null);
  };

  // =====================================================
  // DELETE TASK
  // =====================================================

  const handleDeleteTask = (id) => {
    // Confirmation dialog
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) {
      return;
    }

    setDeletingId(id);
    setDeleteError(null);

    deleteTask(id)

      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Failed to delete task"
          );
        }

        // Remove from React state
        setTasks((prevTasks) =>
          prevTasks.filter(
            (task) =>
              task._id !== id
          )
        );

        // If deleting edited task
        if (editingId === id) {
          handleCancelEdit();
        }

        showToast(
          "success",
          "Task deleted successfully!"
        );
      })

      .catch((err) => {
        setDeleteError(err.message);

        showToast(
          "error",
          err.message
        );
      })

      .finally(() => {
        setDeletingId(null);
      });
  };

  // =====================================================
  // INITIAL LOADING
  // =====================================================

  if (loading) {
    return <Spinner />;
  }

  // =====================================================
  // INITIAL GET ERROR
  // =====================================================

  if (error) {
    return (
      <div
        className="error-wrapper"
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <ErrorMessage message={error} />

        <button
          className="retry-btn"
          onClick={fetchTasks}
        >
          Retry
        </button>
      </div>
    );
  }

  // =====================================================
  // MAIN UI
  // =====================================================

  return (
    <section className="projects-section">

      {/* =================================================
          TOAST
         ================================================= */}

      {toast && (
        <div
          className={`toast ${toast.type}`}
        >
          <span>
            {toast.type === "success"
              ? "✓"
              : "✕"}
          </span>

          {toast.message}
        </div>
      )}

      <div className="section-container">

        {/* =================================================
            FEATURED PROJECTS
           ================================================= */}

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="projects-grid">

          {projectsData.map((project) => (
            <div
              className="project-card"
              key={project.id}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="project-info">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>

                </div>
              </div>
            </div>
          ))}

        </div>

        <hr />

        {/* =================================================
            BACKEND TASK SECTION
           ================================================= */}

        <h2 className="section-title">
          Backend <span>Tasks</span>
        </h2>

        {/* Delete error */}

        {deleteError && (
          <p className="error-message">
            {deleteError}
          </p>
        )}

        {/* =================================================
            CREATE / UPDATE FORM
           ================================================= */}

        <form
          className="task-form"
          onSubmit={
            editingId
              ? handleUpdateTask
              : handleCreateTask
          }
        >

          {/* Title */}

          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            disabled={
              updating
            }
            required
          />

          {/* Description */}

          <textarea
            placeholder="Task description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            disabled={
              updating
            }
            required
          />

          {/* Priority */}

          <select
            value={priority}
            onChange={(e) =>
              setPriority(
                e.target.value
              )
            }
            disabled={
              updating
            }
          >
            <option value="low">
              Low
            </option>

            <option value="medium">
              Medium
            </option>

            <option value="high">
              High
            </option>
          </select>

          {/* Submit */}

          <button
            type="submit"
            disabled={
              creating ||
              updating
            }
          >
            {editingId
              ? updating
                ? "Updating..."
                : "Update Task"
              : creating
              ? "Saving..."
              : "Create Task"}
          </button>

          {/* Cancel */}

          {editingId && (
            <button
              type="button"
              className="cancel-btn"
              onClick={
                handleCancelEdit
              }
              disabled={updating}
            >
              Cancel
            </button>
          )}

          {/* Create Error */}

          {!editingId &&
            createError && (
              <p className="error-message">
                {createError}
              </p>
            )}

          {/* Update Error */}

          {editingId &&
            updateError && (
              <p className="error-message">
                {updateError}
              </p>
            )}

        </form>

        {/* =================================================
            TASK LIST
           ================================================= */}

        <div className="tasks-list">

          {tasks.length === 0 ? (

            <div className="no-tasks">
              <p>
                No tasks found.
              </p>
            </div>

          ) : (

            tasks.map((task) => (

              <div
                className={`task-card ${
                  task.optimistic
                    ? "task-optimistic"
                    : ""
                }`}
                key={task._id}
              >

                {/* Title */}

                <h3>
                  {task.title}
                </h3>

                {/* Description */}

                <p>
                  {task.description}
                </p>

                {/* Priority */}

                <p>
                  <strong>
                    Priority:
                  </strong>{" "}
                  {task.priority}
                </p>

                {/* Status */}

                <p>
                  <strong>
                    Status:
                  </strong>{" "}
                  {task.completed
                    ? "Completed"
                    : "Pending"}
                </p>

                {/* Optimistic indicator */}

                {task.optimistic && (
                  <p className="saving-text">
                    Saving to server...
                  </p>
                )}

                {/* Actions */}

                {!task.optimistic && (
                  <div className="task-actions">

                    {/* Edit */}

                    <button
                      className="edit-btn"
                      onClick={() =>
                        handleEditClick(
                          task
                        )
                      }
                      disabled={
                        deletingId ===
                        task._id
                      }
                    >
                      Edit
                    </button>

                    {/* Delete */}

                    <button
                      className="delete-btn"
                      onClick={() =>
                        handleDeleteTask(
                          task._id
                        )
                      }
                      disabled={
                        deletingId ===
                        task._id
                      }
                    >
                      {deletingId ===
                      task._id
                        ? "Deleting..."
                        : "Delete"}
                    </button>

                  </div>
                )}

              </div>

            ))

          )}

        </div>

      </div>
    </section>
  );
}

export default Projects;