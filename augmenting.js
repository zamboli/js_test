Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Number.method('integer', function ( ) {
    return Math[this < 0 ? 'ceiling' : 'floor'] (this);
});

document.writeln((9.68768).integer( ));
