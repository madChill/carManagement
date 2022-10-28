import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';
type userLogin = {
    userName?: string,
    password?: string,
}
export const validate = (values: userLogin) => {
    const errors: userLogin = {};
    if (!values.userName) {
        errors.userName = 'userName is required';
    }
    if (!values.password) {
        errors.password = 'password is required';
    }
    return pickBy(errors, identity);
}