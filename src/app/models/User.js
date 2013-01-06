define( ['backbone', 'Roles'], function(Backbone, Roles){
    return Backbone.Model.extend({
        defaults: {
            'role': Roles.USER
        }
    }); 
});
