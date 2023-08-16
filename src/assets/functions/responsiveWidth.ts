export const responsiveWidth = (width: number) => {
    if (width < 376) {
        return 240
    }

    if (width < 444) {
        return 295
    }

    if (width < 768) {
        return 404
    }

    if (width < 1024) {
        return 500
    }

    if (width < 1280) {
        return 692
    }

    if (width <= 1281) {
        return 884
    };

    if (width < 1536) {
        return 914
    };

    return 1000;
};
