const mongoose = require('mongoose');
const { Schema } = mongoose;

const BioSchema = new Schema({
  name: { type: String },
  species: { type: String },
  class: { type: String },
  career: { type: String },
  careerLevel: { type: String },
  careerPath: { type: String },
  status: { type: String }
})

const StatSchema = new Schema({
  stat: { type: Number },
  adv: { type: Number }
})

const StatsSchema = new Schema({
  WS: { type: StatSchema },
  BS: { type: StatSchema },
  S: { type: StatSchema },
  T: { type: StatSchema },
  I: { type: StatSchema },
  Ag: { type: StatSchema },
  Dex: { type: StatSchema },
  Int: { type: StatSchema },
  WP: { type: StatSchema },
  Fel: { type: StatSchema },
})

const SkillSchema = new Schema({
  name: { type: String },
  stat: { type: String },
  adv: { type: Number }
})

const TalentSchema = new Schema({
  name: { type: String },
  times: { type: Number }
})

const FateSchema = new Schema({
  fate: { type: Number },
  fortune: { type: Number }
})

const ResolveSchema = new Schema({
  resolve: { type: Number },
  resilience: { type: Number }
})

const ArmorSchema = new Schema({
  name: { type: String },
  location: { type: String },
  enc: { type: Number },
  ap: { type: Number },
  qualities: { type: String }
})

const WeaponSchema = new Schema({
  name: { type: String },
  enc: { type: Number },
  damage: { type: Number },
  qualities: { type: String }
})

const TrappingSchema = new Schema({
  name: { type: String },
  amount: { type: Number },
  enc: { type: Number }
})

const CharacterSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  bio: { type: BioSchema },
  stats: { type: StatsSchema },
  basicSkills: { type: [SkillSchema] },
  advSkills: { type: [SkillSchema] },
  talents: { type: [TalentSchema] },
  fate: { type: FateSchema },
  resolve: { type: ResolveSchema },
  currentWounds: { type: Number },
  armor: { type: [ArmorSchema] },
  weapons: { type: [WeaponSchema] },
  trappings: { type: [TrappingSchema] }
})

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
})

const Character = mongoose.model('Character', CharacterSchema)
const User = mongoose.model('User', UserSchema)
module.exports = {
  Character,
  User
}