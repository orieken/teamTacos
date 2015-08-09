exports.index = function(req, res) {
    res.status(200).json(
        { contacts: [
            {firstName:'Oscar', lastName:'Boom', email: 'bisbot@gmail.com'},
            {firstName:'Umair', lastName:'Boom'},
            {firstName:'Wallace', lastName:'Boom', email: 'wallaceh@gmail.com'}
    ]});
}