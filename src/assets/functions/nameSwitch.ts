const nameSwitch: any = (name: string) => {
    switch(name) {
        case 'transfer':
            return 'Транспорт';
        case 'cafes':
            return 'Кафе и рестораны';
        case 'onlineMarkets':
            return 'Интернет магазины';
        case 'markets': 
            return 'Магазины';
        case 'subscriptions':
            return 'Подписки';
        case 'education':
            return 'Обучение';
        case 'entertainment':
            return 'Развлечения'
        default:
            return '';
    }  
}

export default nameSwitch;