function isPalindrome(string1: string) {
  const str = string1;

  const tmpArr1: string[] = [...str];

  const tmpArr2: string[] = [];
  tmpArr2.push(...tmpArr1);

  const backSortedArr = tmpArr1.reverse();

  for (let j = 0; j < str.length; j++) {
    if (backSortedArr[j] !== tmpArr2[j]) {
      return false;
    }
  }

  return true;
}

const a = isPalindrome("pop");

console.log(a);
