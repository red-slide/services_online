import path from 'path';

const get404Page = (req, res) => {
    res.status(404).sendFile(path.resolve('src/view/error404.html'));
}

export default get404Page;