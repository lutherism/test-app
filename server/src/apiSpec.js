module.exports = {
  endpoints: {
    notes: {
      allows: [
        "CREATE",
        "DELETE",
        "UPDATE",
        "POST",
        "GET",
        "OPTIONS",
        "PUT"
      ],
      methods: {
        "CREATE": true,
        "DELETE": true,
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
