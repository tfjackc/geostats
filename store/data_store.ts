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
        searchedValue: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson" as string,
        geojson_layer: [] as any[],
        layerInfo: [] as any[],
        layerName: "earthquakes" as string,
        fieldNames: [] as any[],
        selectedFields: [] as any[],
        headers: [] as any[],
        layerData: [] as any[],
        layerCheckbox: false as boolean,
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
                    this.geojson_layer.push(this.geojson)
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

            // Assuming this.geojson is an object with a "features" array
            //@ts-ignore
            if (this.geojson && this.geojson.features.length > 0) {
                // Accessing the first feature in the features array
                //@ts-ignore
                const layerFeatures = this.geojson.features[0];

                // Ensure the first feature has properties
                if (layerFeatures.properties) {
                    this.fieldNames = Object.keys(layerFeatures.properties);
                    //@ts-ignore
                    this.geojson.features.forEach((field: any) => {
                        this.layerData.push(field.properties)
                    });

                } else {
                    console.error('The first feature does not have properties');
                }



            } else {
                console.error('GeoJSON data is missing or invalid');
            }
        },

        async createTable() {
          console.log("create table")
            // Create dynamic headers based on selected fields
            this.headers = this.selectedFields.map(field => ({
                align: 'start',
                key: field,
                sortable: true,
                title: field,
            }));
        },

        async layerCheck(e: any) {
            console.log("layer vis changed")

        },
    }
})

//https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson
//https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/countries.geojson
//https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json