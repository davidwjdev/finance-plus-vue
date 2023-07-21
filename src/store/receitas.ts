import axios from "axios";
import moment from "moment";
import { defineStore } from "pinia";

interface Receita {
    data: string;
    descricao: string;
    valor: string;
    dia: string;
    mes: string;
    ano: string;
    tags: Array<{}>;
}
interface ReceitasModel {
    data: Receita[];
    apiKey: string;
    endpointUrl: string;
}

export const useReceitasStore = defineStore("receitasStore", {
    state: (): ReceitasModel => ({
        data: [],
        apiKey: import.meta.env.VITE_APP_API_KEY,
        endpointUrl: import.meta.env.VITE_APP_BASE_URL
    }),
    getters: {},
    actions: {
        async fetchData() {
            try {
                const response: any = await axios.get(
                    this.endpointUrl + "/Receitas",
                    {
                        headers: {
                            Authorization: this.apiKey
                        }
                    }
                );
                console.log(response);
                const result: any = response.data.records.map((res: any) => {
                    return {
                        data: moment(res.fields.data).format("DD/MM/YYYY"),
                        descricao: res.fields.descricao,
                        valor: `R$ ${res.fields.valor}`,
                        dia:
                            moment(res.fields.data).day().toString().length < 2
                                ? "0" + moment(res.fields.data).day().toString()
                                : moment(res.fields.data).day().toString(),
                        mes:
                            moment(res.fields.data).month().toString().length <
                            2
                                ? "0" +
                                  moment(res.fields.data).month().toString()
                                : moment(res.fields.data).month().toString(),
                        ano: moment(res.fields.data).year().toString(),
                        tags: JSON.parse(res.fields.tags)
                    };
                });
                return this.updateData(result);
            } catch (err) {
                console.error("Erro ao localizar receitas:", err);
            }
        },
        updateData(data: any) {
            console.log(data);
            this.data = data;
        }
    }
});
