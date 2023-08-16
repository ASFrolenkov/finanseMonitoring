export const responsiveHeight = (width: number) => {
    if (width < 376) {
        return 220
    }

    if (width < 645) {
        return 332
    }

    if (width < 768) {
        return 362
    }

    if (width < 1024) {
        return 402
    }

    if (width < 1280) {
        return 442
    }

    return 572
};