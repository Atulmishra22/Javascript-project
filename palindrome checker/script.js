document.getElementById('check').addEventListener('click',palindromeChecker);
document.getElementById('input').addEventListener('keydown',(event) => {
    if(event.key === 'Enter'){
        palindromeChecker();
    }
});
function palindromeChecker(){
    const input = document.getElementById('input').value;
    const text = input.toLowerCase().replace(/[^a-z0-9]/g,'');
    const reversed = text.split('').reverse().join('');
    if (text === reversed) {
        document.getElementById('result').innerHTML = `The ${text} is a palindrome`;
        } else {
            document.getElementById('result').innerHTML = `The ${text} is not palindrome`;
            }
}