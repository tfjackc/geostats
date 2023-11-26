import type { GeoJSON } from "leaflet";

export const useDataStore = defineStore('data_store', {
    state: () => ({
        drawer: true,
        rail: false,
        url_dialog: false,
        file_dialog: false,
        files: [],
        geojson: undefined as GeoJSON | undefined,
    }),
    getters: {

    },
    actions: {
        async getFiles() {
            const response = await fetch(
                "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson"
            );
            this.geojson = await response.json();
            console.log(this.geojson);
        }


    },
})