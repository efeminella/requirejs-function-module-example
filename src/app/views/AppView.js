define(function(require){
    var factory = require('editors/EditorFactory');
    return Backbone.View.extend({
        el: '#app-container',
        events : {
            'change select' : 'setEditor'
        },
        setEditor: function(evt) {
            var role = evt.target.value;
            this.$('.editor').html( factory(role).render().el );     
        }
    });
});