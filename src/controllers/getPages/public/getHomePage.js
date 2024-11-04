import path from 'path';

const getHomePage = (req, res) => {
    res.status(200).sendFile(path.resolve('src/view/home.html'));
}

export default getHomePage;