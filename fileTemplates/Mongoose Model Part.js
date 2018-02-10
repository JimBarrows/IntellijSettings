import mongoose from "mongoose";
const Schema = mongoose.Schema,
      Types  = mongoose.Schema.Types;


const ${NAME} = new Schema({
	name: Types.String,
	description: Types.String
});

export default ${NAME};