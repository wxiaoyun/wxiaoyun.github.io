export const splitArray = <T>(array: T[], minChunkSize: number): T[][] => {
  if (minChunkSize <= 0) {
    throw new Error("minChunkSize should be greater than 0");
  }

  if (array.length <= minChunkSize) {
    throw new Error("array length should be greater than minChunkSize");
  }

  const result: T[][] = [];
  let i = 0;

  while (i < array.length) {
    let chunkSize = Math.max(
      minChunkSize,
      Math.ceil(
        (array.length - i) / Math.ceil((array.length - i) / minChunkSize),
      ),
    );
    result.push(array.slice(i, i + chunkSize));
    i += chunkSize;
  }

  if (result[result.length - 1].length >= minChunkSize) {
    return result;
  }

  const last = result.pop();
  let j = 0;
  while (last?.length) {
    result[j].push(last.pop() as T);
    j = (j + 1) % result.length;
  }

  return result;
};
