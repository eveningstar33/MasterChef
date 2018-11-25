import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {   // We delete the keyword "function" because getResults is an asynchronous method of this class 
    
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes; 
        } catch (error) {
            alert(error);
        }
    }
}