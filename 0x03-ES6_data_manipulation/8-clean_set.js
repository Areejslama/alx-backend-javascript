export default function cleanSet(set, startString) {
	const result = [...set]
        .filter(value => value.startsWith(startString))
        .join('-');

    return result;
}
