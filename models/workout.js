const { Schema, model } = require('mongoose');

const workoutSchema = new Schema(
  {
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }
    ]
  },
  {
    toJSON: {virtuals: true}
    }
);

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, value) => {
        return total + value.duration;
    },0);
});


const Workout = model('workout', workoutSchema);

module.exports = Workout;