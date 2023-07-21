import axios from "axios";
import { defineStore } from "pinia";
export const useFormReceitasStore = defineStore("formReceitasStore", {
    state: () => ({
        data: [],
        apiKey: import.meta.env.VITE_APP_API_KEY,
        endpointUrl: import.meta.env.VITE_APP_BASE_URL
    }),
    actions: {
        async fetchData() {
            console.log(this.apiKey, this.endpointUrl);
            try {
                const response = await axios.get(
                    this.endpointUrl + "/Receitas",
                    {
                        headers: {
                            Authorization: this.apiKey
                        }
                    }
                );
                this.data = response.data;
                console.log(this.data);
            } catch (err) {
                console.error("Erro ao localizar receitas:", err);
            }
        },
        clearForm() {}
    }
});
