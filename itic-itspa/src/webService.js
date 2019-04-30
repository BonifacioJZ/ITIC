import api from "./api";

export default {
  async getProcesos() {
    return api().get("itspa/procesos/");
  },
  async getMaestros() {
    return api().get("itic/teachers/");
  }

};
