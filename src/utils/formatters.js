export function formatNumber(number) {
    try {
        number.toLocaleString(
            undefined, // leave undefined to use the browser's locale,
            // or use a string like 'en-US' to override it.
            { minimumFractionDigits: 2 }
        );
    } catch (error) {
        return number
    }
}

