define(function(require){
    var editors = {
        'admin' : require('editors/AdminEditorView')
      , 'user'  : require('editors/UserEditorView')
      , 'guest' : require('editors/GuestEditorView')
      , // additional implementations ...
    };
    return function(role){
        try {
            return new editors[role];
        } catch(error) {
            throw new Error('Unknown Role Specified. See app/models/Roles');
        }
    }
});
