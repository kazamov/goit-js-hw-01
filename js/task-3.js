function getNumericValue(value) {
	return Number(value.slice(0, value.length - 2));
}

function getElementWidth(content, padding, border) {
	const contentWidth = getNumericValue(content);
	const paddingWidth = getNumericValue(padding);
	const borderWidth = getNumericValue(border);

	return contentWidth + 2 * paddingWidth + 2 * borderWidth;
}

console.group('Task 3');

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200

console.groupEnd();
