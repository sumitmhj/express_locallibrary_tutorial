const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: {type: String, required: true, minLength: 3, maxLenght: 100},
});

GenreSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/catalog/genre/${this.id}`;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);