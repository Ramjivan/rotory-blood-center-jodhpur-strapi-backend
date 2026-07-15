export default {
  beforeCreate(event: any) {
    const { data } = event.params;
    if (!data.date) {
      data.date = new Date().toISOString().split('T')[0];
    }
  },
};
