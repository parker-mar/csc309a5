/**
 * Created by ahmedel-baz on 15-11-07.
 */
module.exports = function(app){
    var ConnectionSchema = new app.mongoose.Schema({
        user: { type: app.mongoose.SchemaTypes.ObjectId, ref: 'Users'},
        ipAddress: String,
        device: {
            dtype: String,
            vendor: String,
            model: String
        },
        browser: String,
        os: String
    });

    return app.mongoose.model('Connections',ConnectionSchema);
}