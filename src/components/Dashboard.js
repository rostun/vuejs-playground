import axios from 'axios';

export default {
   data() {
      return {
         food_input: '',
         end_input: '',
      }
   },
   methods: {
      DisplayFood() {
         axios.get('https://habitica.com/api/v3/content', {
            crossDomain: true,
            transformResponse: [
               (data) => {
                  let _res = JSON.parse(data);
                  return _res.data;
               }
            ]
         })
         .then((response) => {
            this.$emit('foodData', response.data.food);
            this.$emit('petData', response.data.petInfo);
         });

         this.end_input = this.food_input;
      },
   },
};