
/**
 * Created by Navit
 */
 var mongoose = require("mongoose");
 var Schema = mongoose.Schema;
 
 var comments = new Schema({
   comment: { type: String, trim: true, required: true },
   postId: { type: Schema.Types.ObjectId, ref: 'posts' },
   userId: { type: Schema.Types.ObjectId, ref: 'users' },
   createdAt: { type: Date, default: Date.now },
   updatedAt: { type: Date, default: Date.now }
 });
 
 module.exports = mongoose.model("comments", comments);