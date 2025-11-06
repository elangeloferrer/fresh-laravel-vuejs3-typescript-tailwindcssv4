import axios from "axios";

// Extend the Window interface to recognize axios
declare global {
    interface Window {
        axios: typeof axios;
    }
}

// Assign axios to the window object
window.axios = axios;

// Set default header
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

export default axios;
