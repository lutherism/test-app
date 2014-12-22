module.exports = {
  endpoints: {
    notes: {
      allows: {
        "CREATE": true,
        "DESTROY": true,
        "UPDATE": true,
        "POST": true,
        "GET": true
      },
      model: "notes",
    }
  }
};
