import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
    originalUrl: {
		type: String,
		required: true,
	},
    hash: {
		type: String,
		required: true,
	},
    shortenUrl: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        required: true,
    }
});

export const Url = mongoose.model('Url', UrlSchema);
