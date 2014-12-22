module.exports = {
  collections: [
    "notes"
  ],
  models: {
    "notes": {
      name: "Note",
      schema: {
        id: String,
        subject: String,
        message: String,
        creatorId: String
      }
    }
  }
};
