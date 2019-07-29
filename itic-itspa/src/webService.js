import api from "./api";

export default {
    async getProcesos() {
        return api().get("itic/procesos/");
    },
    async getMaestros() {
        return api().get("itic/teachers/");
    },
    async getMatter() {
        return api().get("itic/matters/")
    }
};