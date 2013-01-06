define(function(require){
    var BaseEditorView = require('editors/BaseEditorView');
    return BaseEditorView.extend({
        render: function(){
            this.$el.html('<p>Admin Editor...</p>');
            return this;
        }
    })
});
