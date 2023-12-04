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
        layerCheckbox: true as boolean,
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
                    this.geojson = await response.json();
                    this.layerInfo.push(this.layerName)
                    // Close the v-form upon a successful data fetch
                    this.url_dialog = false;
                    await this.getData();
                } else {
                    // Handle unsuccessful response (e.g., show an error message)
                    console.error('Failed to fetch data:', response.status, response.statusText);
                }
            } catch (error) {
                // Handle any other errors that might occur during the fetch
                console.error('Error during data fetch:', error);
            }
        },

        async getData() {
           this.layerCheckbox = true;
           // @ts-ignore
           this.geojson.visible = true;
        },

        async layerCheck(e: any) {
            this.layerCheckbox = e.target.checked;
            // @ts-ignore
            this.geojson.visible = this.layerCheckbox
        },
    }
})

//https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson
//https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/countries.geojson
//https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json