import type { GeoJSON } from "leaflet";

export const useDataStore = defineStore('data_store', {
    state: () => ({
        drawer: true,
        rail: false,
        url_dialog: false,
        file_dialog: false,
        files: [],
        geojson: undefined as GeoJSON | undefined,
        form: false as boolean,
        loading: false as boolean,
        searchedValue: "" as string,
        layers: [] as any[],
        layerInfo: [] as any[],
    }),
    getters: {

    },
    actions: {
        async getGeoJSONWebService() {
            const geojson_url = this.searchedValue;
            const response = await fetch(geojson_url);
            const geojson = await response.json();
            this.layers.push(geojson);

            await this.loopLayers();
        },

        async loopLayers() {
            this.layers.forEach((layer: any) => {
                if (layer.metadata?.title && !this.layerInfo.includes(layer.metadata.title)) {
                    console.log(layer.metadata.title);
                    this.layerInfo.push(layer.metadata.title);
                } else if (!this.layerInfo.includes(this.searchedValue)) {
                    console.log(this.searchedValue);
                    this.layerInfo.push(this.searchedValue);
                }
            });
        }
    }
})

//https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson
//https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/countries.geojson
//https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json