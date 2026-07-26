/**
 * Created by SEMİH on 2.05.2017.
 * Optimized version using Sieve of Eratosthenes algorithm
 */

function findPrimesUpTo(max) {
    if (max < 2) return [];
    
    // Create a boolean array "isPrime[0..max]" and initialize all entries as true
    const isPrime = new Uint8Array(max + 1);
    isPrime.fill(1);
    isPrime[0] = 0;
    isPrime[1] = 0;
    
    // Only need to check up to sqrt(max)
    for (let i = 2; i * i <= max; i++) {
        if (isPrime[i]) {
            // Mark all multiples of i as not prime
            for (let j = i * i; j <= max; j += i) {
                isPrime[j] = 0;
            }
        }
    }
    
    // Collect all prime numbers
    const primes = [];
    for (let i = 2; i <= max; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }
    
    return primes;
}

// Example usage with a reasonable limit (adjust as needed)
const maxLimit = 1000000; // 1 million instead of 2^53-1 which is impractical
const asalDizi = findPrimesUpTo(maxLimit);

console.log(`Found ${asalDizi.length} primes up to ${maxLimit}`);
if (asalDizi.length > 0) {
    console.log(`First 10 primes: ${asalDizi.slice(0, 10).join(', ')}`);
    console.log(`Last 10 primes: ${asalDizi.slice(-10).join(', ')}`);
}