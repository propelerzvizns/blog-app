import moment from 'moment'
const mixin = {
    filters: {
        formatDate (date, outputFormat = 'YYYY-MM-DD HH:mm:ss') {
            return moment(date).format(outputFormat);
        },
        humanFormatDate(date) {
            return moment(date).startOf('hour').fromNow();
        }
    }
}

export default mixin;