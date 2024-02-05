//

const usuariosGet = (req, res) => {

    const query = req.query;
    res.json({
        msg: 'get API -  controlador',
        query
    });
};

const usuariosPut = (req, res) => {

    const id = req.params.id;
    res.json({
        msg: 'put API controlador',
        id
    });
};

const usuariosPost = (req, res) => {
    const body = req.body;
    res.json({
        msg: 'post API - controlador',
        body
    });
};

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
};

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - controlador'
    });
};

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}