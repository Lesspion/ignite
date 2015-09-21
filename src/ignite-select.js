(function () {

    var domNode = domNode || function (domNode) {
        this.originalNode = domNode;
        this.node = domNode;
    };

    var ignite = ignite || function (domNode) {
        var node;
        if (typeof selector === 'string') {
            node = document.querySelector(selector);
        } else {
            node = selector;
        }
        return new domNode(node);
    };

    ignite.extend = ignite.prototype = ignite.extend || {};
})(this);
