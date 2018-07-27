export const customLogginMiddleware = store => next => action => {
    console.log('Custom Logging Middleware triggered: ', action);
    console.log('Current State : ', store.getState());
    next(action);
};