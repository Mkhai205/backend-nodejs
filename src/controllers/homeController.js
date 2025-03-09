const getHomePage = (req, res) => {
    // process data
    // call model to get data from database
    return res.render('home');
};

const getSample = (req, res) => {
    return res.render('sample');
};

const getKhaidz = (req, res) => {
    return res.send('<h1>Hello, Khaidz hehe!</h1>');
};

module.exports = {
    getHomePage,
    getSample,
    getKhaidz
}