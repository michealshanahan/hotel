const mongoose = require('mongoose' )
const Schema = mongoose.Schema

const reservationSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    start:{
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    shuttleRequest: {
        type: Boolean,
        default: false
    },
    shuttleTime: String,
    shuttleLocation: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    editReservation: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Reservations', reservationSchema)