import axios from "axios";
import { PLANTS_API } from "./config/api";

axios.defaults.baseURL = `${PLANTS_API}`;
axios.defaults.headers.common["Content-Type"] = "application/json";