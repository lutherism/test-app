module.exports = {
  endpoints: {
    notes: {
      allows: [
        "CREATE",
        "DESTROY",
        "UPDATE",
        "POST",
        "GET",
        "OPTIONS",
        "PUT"
      ],
      methods: {
        "CREATE": true,
        "DESTROY": true,
        "UPDATE": true,
        "POST": true,
        "GET": true,
        "OPTIONS": true,
        "PUT": true
      },
      model: "notes",
    }
  }
};
