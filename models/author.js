const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const {DateTime} = require("luxon");

const AuthorSchema = new Schema({
    first_name: {type: String, required: true, maxLength: 100},
    family_name: {type: String, required: true, maxLength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
});

// Virtual for author's full name
AuthorSchema.virtual("name").get(function () {
    //  To avoid errors in cases where an author does not have either a family name or first name
    // we want to make sure we handle the exception by returning an empty string for that case
    let fullname = "";
    if (this.first_name && this.family_name){
        fullname = `${this.family_name}, ${this.first_name}`;
    }
    
    return fullname;
});

AuthorSchema.virtual("url").get(function () {
    // we don't use an arrow function as we'll need the this object
    return `/catalog/author/${this.id}`;
});

// datetime formatting
AuthorSchema.virtual("author_lifespan").get(function () {
    let lifespan_string = "";
    if (this.date_of_birth) {
        lifespan_string = DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED);
    }
    lifespan_string += " - ";
    if(this.date_of_death) {
        lifespan_string += DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED);
    }
    return lifespan_string;
})


module.exports = mongoose.model("Author", AuthorSchema);
