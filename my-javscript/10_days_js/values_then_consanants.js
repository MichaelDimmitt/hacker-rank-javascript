// https://www.hackerrank.com/challenges/js10-loops/submissions/code/101864286
// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .

const vowelsAndConsonants = (s) => {
    const vowels = 'aeiou';
    const sortedLetters =
        s.split('').reduce((acc, x) => 
            vowels.includes(x) ?
                (acc[0].push(x), acc) :
                (acc[1].push(x), acc)
            , [[], []])
    const newarr = [...sortedLetters[0], ...sortedLetters[1] ]
    newarr.map(x => (console.log(x), x))
}
