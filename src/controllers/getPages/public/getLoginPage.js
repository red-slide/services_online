import path from 'path';

const getLoginPage = (req, res) => {
    res.status(200).sendFile(path.resolve('src/view/login.html'));;
}

export default getLoginPage;