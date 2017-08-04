import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Component.extend(LoginControllerMixin,{
  authenticator: 'authenticator:parse-email',

  action: function(){
    console.log(this.model);
  }
});