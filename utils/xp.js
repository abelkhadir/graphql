export function convertXPToReadable(xp) {
    const abs = Math.abs(xp);
    if (abs < 1000) {
        return `${Math.round(xp)} B`;
    } else if (abs < 1000000) {
        const kb = (xp / 1000).toFixed(2);
        return `${kb} KB`;
    } else {
        const mb = (xp / 1000000).toFixed(2);
        return `${mb} MB`;
    }
}