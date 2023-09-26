import axios from "axios";
import moment from "moment";
import { defineStore } from "pinia";
import { useModalStore } from "./modal";

interface ReceitaModel {
    data: string;
    descricao: string;
    valor: string;
    dia: string;
    mes: string;
    ano: string;
    tags: Array<{}>;
}
interface ReceitasModel {
    item: ReceitaModel;
    data: ReceitaModel[];
    dataPage: ReceitaModel[];
    apiKey: string;
    endpointUrl: string;
    monthPage: string;
    yearPage: string;
}

export const useReceitasStore = defineStore("receitasStore", {
    state: (): ReceitasModel => ({
        item: {
            data: "",
            descricao: "",
            valor: "",
            dia: "",
            mes: "",
            ano: "",
            tags: []
        },
        data: [],
        dataPage: [],
        monthPage: moment().format("MM"),
        yearPage: moment().format("YYYY"),
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
                const result: any = response.data.records.map((res: any) => {
                    return {
                        data: moment(res.fields.data),
                        descricao: res.fields.descricao,
                        valor: res.fields.valor,
                        dia: moment(res.fields.data).format("DD"),
                        mes: moment(res.fields.data).format("MM"),
                        ano: moment(res.fields.data).format("YYYY"),
                        tags: JSON.parse(res.fields.tags)
                    };
                });
                return this.updateData(result);
            } catch (err) {
                console.error("Erro ao localizar receitas:", err);
            }
        },
        updateData(data: Array<any>) {
            this.data = data;
            this.dataPage = this.filterData(data);
            return this.dataPage;
        },
        filterData(data: Array<any>) {
            const dataFilter = data.filter((item: any) => {
                return (
                    item.mes === this.monthPage && item.ano === this.yearPage
                );
            });

            return dataFilter.sort((a: any, b: any) => a.dia - b.dia);
        },

        formatDate(date: string) {
            const format = moment(date).format("DD/MM/YYYY");
            return format;
        },

        nextPage() {
            let month = this.monthPage;
            let year = this.yearPage;

            if (parseInt(this.monthPage) === 12) {
                month = "01";
                year = (parseInt(year) + 1).toString();
            } else {
                month = (parseInt(month) + 1).toString();
            }
            this.monthPage = moment(month, "MM").format("MM");
            this.yearPage = moment(year, "YYYY").format("YYYY");
            this.dataPage = this.filterData(this.data);
        },
        previousPage() {
            let month = this.monthPage;
            let year = this.yearPage;
            if (parseInt(this.monthPage) === 1) {
                month = "12";
                year = (parseInt(year) - 1).toString();
            } else {
                month = (parseInt(month) - 1).toString();
            }
            this.monthPage = moment(month, "MM").format("MM");
            this.yearPage = moment(year, "YYYY").format("YYYY");
            this.dataPage = this.filterData(this.data);
        },
        insertData(data: ReceitaModel) {
            try {
                axios.post(
                    this.endpointUrl + "/Receitas",
                    {
                        fields: {
                            descricao: data.descricao,
                            valor: data.valor,
                            data: data.data,
                            tags: data.tags
                        }
                    },
                    {
                        headers: {
                            Authorization: this.apiKey,
                            "Content-Type": "application/json"
                        }
                    }
                );
                useModalStore().toggleModal();
                return this.fetchData();
            } catch (err) {
                console.error("Erro ao Inserir receita API:", err);
            }
        }
    }
});
