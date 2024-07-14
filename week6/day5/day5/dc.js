function findAnagram(str1, str2) {
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    if (str1.length !== str2.length) {
        return "Input strings are not anagrams.";
    }

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    if (sortedStr1 === sortedStr2) {
        return "Input strings are anagrams. Anagram string: " + sortedStr1;
    } else {
        return "Input strings are not anagrams.";
    }
}

console.log(findAnagram("Astronomer", "Moon starer"));  
console.log(findAnagram("School master", "The classroom"));  
console.log(findAnagram("The Morse Code", "Here come dots"));  
console.log(findAnagram("hello", "world"));  
