import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Home from "./components/Home.js";
import Profile from "./components/Profile.js";
import BoardUser from "./components/BoardUser.js";
import Create from "./components/TaskList.js";
// import Sidebar from "./components/Sidebar/Sidebar.js";
// import "./components/Sidebar/Sidebar.css";
// import Whiteboard from "./components/Whiteboard/Whiteboard.js";
// import Tasks from "./components/Tasks/Tasks.js";
import Sandbox from "./components/Sandbox.js";

import { logout } from "./actions/auth.js";
import { clearMessage } from "./actions/message.js";

import EventBus from "./common/EventBus.js";

const App = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    let location = useLocation();

    useEffect(() => {
        if (["/login", "/register"].includes(location.pathname)) {
            dispatch(clearMessage()); // clear message when changing location
        }
    }, [dispatch, location]);

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, [currentUser, logOut]);

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">
                    The Task Sandbox
                </Link>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/home"} className="nav-link">
                            Home
                        </Link>
                    </li>

                    {currentUser && (
                        <li className="nav-item">
                            <Link to={"/user"} className="nav-link">
                                User
                            </Link>
                        </li>
                    )}
                </div>

                {currentUser ? (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/profile"} className="nav-link">
                                {currentUser.username}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                href="/login"
                                className="nav-link"
                                onClick={logOut}
                            >
                                LogOut
                            </a>
                        </li>
                    </div>
                ) : (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                                Login
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/register"} className="nav-link">
                                Sign Up
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/task"} className="nav-link">
                                Create New Task
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/sandbox"} className="nav-link">
                                Sandbox
                            </Link>
                        </li>
                    </div>
                )}
            </nav>

            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/user" element={<BoardUser />} />
                    <Route path="/task" element={<Create />} />
                    <Route path="/sandbox" element={<Sandbox />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
