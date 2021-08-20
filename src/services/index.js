import axios from 'axios';
export const services = {
    getImages: (product) => {
        const params = {
            key: 'AIzaSyBCXJ1FHcveJ1moFgsnY3wJk5FMZ6N_wMc',
            cx: '16100522f25207ca8',
            searchType: 'image',
            lr: 'lang_pt',
            num: 1,
            q: product.product
        };

        return axios.get('https://www.googleapis.com/customsearch/v1', { params })
            .then(resp => resp.data.items[0].link)
            .catch(error => {
                console.log({ ...error });
            });
    }
}