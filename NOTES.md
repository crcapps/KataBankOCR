# Notes
## Complete
Stories 1-3 are complete and pass the test cases.
## Incomplete
Story 4 was out of scope for the time I was supposed to spend on this kata.
To solve Story 4, I would have done as follows:
1. I have the components of each numeric symbol mapped to 9 bits in the grammar.
2. To determine "one off," each zero is flipped individually to a one.
3. If flipping a bit results in a valid number, run it through the checksum.
4. This would be a good place to solve it recursively.
5. If there are multiple invalid characters.
6. If no valid checksum is hit by any combination, the symbols remain.
7. If there are any `?` left in the string, the status remains `ILL`.
8. If there are valid checksum hits, they are added to the `guesses` array.
9. If there are any numbers in the guesses array, the status is marked `AMB`.
