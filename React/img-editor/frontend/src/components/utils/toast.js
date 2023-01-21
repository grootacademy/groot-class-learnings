import { toast } from "react-toastify";

export const notify = (message, type) => toast(message, { containerId: 'TOP_RIGHT', autoClose: 5000, type: type });;

