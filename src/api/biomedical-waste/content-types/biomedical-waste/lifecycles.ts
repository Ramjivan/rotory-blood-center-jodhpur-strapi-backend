export default {
  beforeCreate(event: any) {
    const { data } = event.params;
    if (!data.uploadDate) {
      data.uploadDate = new Date().toISOString().split('T')[0];
    }
  }
};
