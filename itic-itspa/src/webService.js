import api from "./api";

export default {
  getProcesos() {
    return api().get("procesos/");
  }
};
