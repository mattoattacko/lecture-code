'use strict';

import mongoose from 'mongoose';

const playerSchema = mongoose.Schema({
  name: {type:String, required: true},
  position: {type:String, required: true},
  bats: {type:String, uppercase:true, default:'R'},
  throws: {type:String, uppercase:true, enum:['L','R']}
});

// playerSchema.pre('findOne', function(done) {
// });

playerSchema.pre('save', function(done){
  this.position = this.position.toUpperCase();
  this.bats = this.bats.toUpperCase();
  this.throws = this.throws.toUpperCase();
  console.log("Saving", this);
  done();
});

export default mongoose.model('players', playerSchema);