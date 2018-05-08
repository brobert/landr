import Backbone from 'backbone';


const AuthUser = Backbone.Model.extend({
	
	urlRoot: '/accounts',
});

export default AuthUser;

