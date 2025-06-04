import { REGISTER_SUCCESS, REGISTER_FAIL, SET_MESSAGE } from "./types.js";

import TaskService from "../services/task.service.js";

export const create = (description) => async (dispatch) => {
    try {
        const data = await TaskService.create(description);
        dispatch({ type: REGISTER_SUCCESS });
        dispatch({ type: SET_MESSAGE, payload: "Task created successfully!" });
        return Promise.resolve(data);
    } catch (error) {
        dispatch({ type: REGISTER_FAIL });
        dispatch({
            type: SET_MESSAGE,
            payload: error.message || "Error creating task",
        });
        return Promise.reject(error);
    }
};

export const fetch = () => async (dispatch) => {
    try {
        const data = await TaskService.fetch();
        // You can dispatch another action here to store tasks in Redux if you want
        return Promise.resolve(data);
    } catch (error) {
        dispatch({
            type: SET_MESSAGE,
            payload: error.message || "Error fetching tasks",
        });
        return Promise.reject(error);
    }
};

export const update = (id, updates) => async (dispatch) => {
    try {
        const data = await TaskService.update(id, updates);
        dispatch({ type: SET_MESSAGE, payload: "Task updated successfully!" });
        return Promise.resolve(data);
    } catch (error) {
        dispatch({
            type: SET_MESSAGE,
            payload: error.message || "Error updating task",
        });
        return Promise.reject(error);
    }
};

export const remove = (id) => async (dispatch) => {
    try {
        const data = await TaskService.remove(id);
        dispatch({ type: SET_MESSAGE, payload: "Task deleted successfully!" });
        return Promise.resolve(data);
    } catch (error) {
        dispatch({
            type: SET_MESSAGE,
            payload: error.message || "Error deleting task",
        });
        return Promise.reject(error);
    }
};

export const getById = (id) => async (dispatch) => {
    try {
        const data = await TaskService.getById(id);
        return Promise.resolve(data);
    } catch (error) {
        dispatch({
            type: SET_MESSAGE,
            payload: error.message || "Error fetching task",
        });
        return Promise.reject(error);
    }
};
