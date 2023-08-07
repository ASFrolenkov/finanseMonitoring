const monthSwitch = (value: string) => {
    switch(value) {
        case 'Jan':
            return 'январь';
        case 'Feb':
            return 'февраль';
        case 'Mar':
            return 'март';
        case 'Apr':
            return 'апрель';
        case 'May':
            return 'май';
        case 'Jun':
            return 'июнь';
        case 'Jul':
            return 'июль';
        case 'Aug':
            return 'август';
        case 'Sep':
            return 'сентябрь';
        case 'Oct':
            return 'октябрь';
        case 'Nov':
            return 'ноябрь';
        case 'Dec':
            return 'декабрь';

        case 'Янв':
            return 'январь';
        case 'Фев':
            return 'февраль';
        case 'Мар':
            return 'март';
        case 'Апр':
            return 'апрель';
        case 'Май':
            return 'май';
        case 'Июн':
            return 'июнь';
        case 'Июл':
            return 'июль';
        case 'Авг':
            return 'август';
        case 'Сен':
            return 'сентябрь';
        case 'Окт':
            return 'октябрь';
        case 'Ноя':
            return 'ноябрь';
        case 'Дек':
            return 'декабрь';

        default: return '';
    }
}

export default monthSwitch;