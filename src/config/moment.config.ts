import moment from "moment";

// moment js set language
moment.locale('ko', {
    weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
    weekdaysShort : '일._월._화._수._목._금._토.'.split('_'),
    weekdaysMin : '일_월_화_수_목_금_토'.split('_'),
});

moment.locale('ko');