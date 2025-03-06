const mongoose = require('mongoose');

const TrainBookingSchema = new mongoose.Schema({
    passengerName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    destination: { type: String, required: true },
    date: { type: String, required: true },
    trainClass: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TrainBooking', TrainBookingSchema);
