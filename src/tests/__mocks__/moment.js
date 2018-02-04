// import de la vraie version de moment
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp)
};