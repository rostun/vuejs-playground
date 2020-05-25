import axios from 'axios';

export default {
   data() {
      return {
         pet_data: {},
         food_data: {},
         food_input: '',
         end_input: '',
      }
   },
   methods: {
      DisplayFood() {
         axios.get('https://habitica.com/api/v3/content', {
            transformResponse: [
               (data) => {
                  let _res = JSON.parse(data);
                  return _res.data;
               }
            ]
         })
         .then((response) => {
            this.food_data = response.data.food;
            this.pet_data = response.data.petInfo;
         });

         this.end_input = this.food_input;
      },
   },
};