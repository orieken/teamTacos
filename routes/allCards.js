exports.index = function(req, res) {
    res.status(200).json(
        { contacts: [
            {firstName:'Oscar', lastName:'Boom'},
            {firstName:'Umair', lastName:'Boom'},
            {firstName:'Wallace', lastName:'Boom'}
    ]});
}