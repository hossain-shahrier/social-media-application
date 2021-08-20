import { useEffect } from "react";

const url = "http://localhost:8000/api/";

export const login = (userData, callback) => {
    fetch(url + "login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            callback(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export const registration = (data) => {
    fetch(url + "registration", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export const logout = (data) => {
    fetch(url + "logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export const GetPost = (callback) => {
    const getData = async () => {
        const response = await fetch(url + "getPost");
        const data = await response.json();
        callback(data);
        console.log(data);
    };
    useEffect(() => {
        getData();
    }, []);
};

export const GetUser = (callback, route) => {
    const getData = async () => {
        const response = await fetch(url + route);
        const data = await response.json();
        callback(data);
        console.log(data);
    };
    useEffect(() => {
        getData();
    }, []);
};

export const GetPostById = (route) => {
    const getData = async () => {
        const response = await fetch(url + "deletePost/" + route);
        const data = await response.json();
        console.log(data);
    };
    useEffect(() => {
        getData();
    }, []);
};

export const createPost = (data) => {
    fetch(url + "createPost", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export const ReactPost = (route) => {
    const getData = async () => {
        const response = await fetch(url + "reactPost/" + route);
        const data = await response.json();
        console.log(data);
    };

    useEffect(() => {
        getData();
    }, []);
};

export const RemoveReactPost = (route) => {
    const getData = async () => {
        const response = await fetch(url + "removeReactPost/" + route);
        const data = await response.json();
        console.log(data);
    };

    useEffect(() => {
        getData();
    }, []);
};

export const GetAllFriends = (callback, route) => {
    const getAllFriends = async () => {
        const response = await fetch(url + "getAllFriends/" + route);
        const data = await response.json();
        callback(data);
        console.log(data);
    };

    useEffect(() => {
        getAllFriends();
    }, []);
};

export const GetActiveFriends = (callback, route) => {
    const getActiveFriends = async () => {
        const response = await fetch(url + "getActiveFriends/" + route);
        const data = await response.json();
        callback(data);
        console.log(data);
    };

    useEffect(() => {
        getActiveFriends();
    }, []);
};

export const UpdateUser = (data) => {
    fetch(url + "updateUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export const Google = (data, callback) => {
    fetch(url + "google", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            callback(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};
