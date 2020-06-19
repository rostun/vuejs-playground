export default {
   props: {
      pet_data: { type: Object },
      food_data: { type: Object },
      food_input: { type: String },
   },
   methods: {
      filterFood() {
         const _foods = Object.values(this.food_data);

         return _foods.filter(food => food.text.toLowerCase().includes(this.food_input.toLowerCase()));
      }
   }
};