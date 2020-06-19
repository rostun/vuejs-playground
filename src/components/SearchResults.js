export default {
   props: {
      pet_data: { type: Object },
      food_data: { type: Object },
      food_input: { type: Object },
   },
   data() {
      return {
         pets_filtered: [],
      }
   },
   methods: {
      filterFood() {
         const _foods = Object.values(this.food_data);

         console.log('hello');
         return _foods.filter((food) => food.key === this.food_input.key);
      },
      filterPets() {
         const _pets = Object.values(this.pet_data);
         return [];
         //this.pets_filtered = _pets.filter((pet)
      },
   }
};