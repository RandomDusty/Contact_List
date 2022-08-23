import * as ContactActionCreators from './contact'
import * as ModalActionCreators from './modal'
import * as AuthorizationActionCreators from './authorization'


export default {
    ...ContactActionCreators,
    ...ModalActionCreators,
    ...AuthorizationActionCreators
}