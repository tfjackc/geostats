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
        layerName: "" as string,
        layerCheckbox: [] as boolean[],
        tab: null as null | number,
    }),
    getters: {

    },
    actions: {
        async getGeoJSONWebService() {
            const geojson_url = this.searchedValue;

            try {
                const response = await fetch(geojson_url);

                if (response.ok) {
                    const geojson = await response.json();
                    this.layers.push(geojson);
                    //await this.loopLayers();

                    this.layerInfo.push(this.layerName)
                    // Close the v-form upon a successful data fetch
                    this.url_dialog = false;
                    await this.loopLayers();
                } else {
                    // Handle unsuccessful response (e.g., show an error message)
                    console.error('Failed to fetch data:', response.status, response.statusText);
                }
            } catch (error) {
                // Handle any other errors that might occur during the fetch
                console.error('Error during data fetch:', error);
            }
        },

        async layerCheck(index: number, e: any) {
            console.log(index)
            this.layerCheckbox[index] = e.target.checked;
            this.layers[index].visible = this.layerCheckbox[index];
        },


        async loopLayers() {
            this.layers.forEach((index: number) => {
                // Set the initial visibility of the layers and checkboxes to true
                this.layers[index].visible = true;
                this.layerCheckbox[index] = true;
            });
        },
    }
})

//https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson
//https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/countries.geojson
//https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json