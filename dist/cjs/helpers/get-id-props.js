/*can-connect@1.0.21#helpers/get-id-props*/
module.exports = function (connection) {
    var ids = [], algebra = this.algebra;
    if (algebra && algebra.clauses && algebra.clauses.id) {
        for (var prop in algebra.clauses.id) {
            ids.push(prop);
        }
    }
    if (connection.idProp && !ids.length) {
        ids.push(connection.idProp);
    }
    if (!ids.length) {
        ids.push('id');
    }
    return ids;
};
//# sourceMappingURL=get-id-props.js.map