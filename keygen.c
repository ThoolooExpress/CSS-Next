#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <inttypes.h>

// The range of valid letters in ASCII.
const static uint64_t RANGE = 'Z' - 'A';
const static char RANGE_MIN = 'A';

// Simple PRNG.  Not at all cryptographically secure.
// This is mostly just a joke.
uint64_t prng(uint64_t *state)
{
    uint64_t d_state = *state;

    d_state ^= d_state << 13;
    d_state ^= d_state >> 7;
    d_state ^= d_state << 17;

    return *state = d_state;
}

// A key generator.  Totally deterministic on the
// seed supplied.  If you supply too big a seed this
// program may hang, or it may not, depending on how
// fast your computer is.
int main(int argc, char *argv[])
{
    if (argc != 2)
    {
        fprintf(stderr, "Expected exactly 1 arg, the seed.\n");
        abort();
    }

    const int seed = atoi(argv[1]);

    if (seed < 0)
    {
        fprintf(stderr, "Seed may not be negative.\n");
        abort();
    }

    if (seed == 0)
    {
        fprintf(stderr, "Seed invalid or zero.  Enter a positive integer.\n");
        abort();
    }

    uint64_t random_state = 0xDEADBEEFF00DBABE;
    for (int i = 0; i < seed * 8; ++i)
    {
        prng(&random_state);
    }

    char key[] = "NOTH-INGU-PMYS";

    char a = RANGE_MIN + (prng(&random_state) % (RANGE / 2));
    key[1] = a;
    key[6] = a;

    char b;
    do
    {
        b = RANGE_MIN + ((((int)a) + 1337) % RANGE);
    } while (b == a);
    key[3] = b;

    char c = a + 5;
    key[8] = c;

    key[0] = RANGE_MIN + (prng(&random_state) % RANGE);

    key[2] = RANGE_MIN + (RANGE / 2) + (prng(&random_state) % (RANGE / 2));
    key[7] = RANGE_MIN + (RANGE / 2) + (prng(&random_state) % (RANGE / 2));

    char d;

    do
    {
        d = RANGE_MIN + (prng(&random_state) % RANGE);
    } while (d % 2 != 0);

    key[5] = d;
    key[10] = d;

    key[11] = RANGE_MIN + (RANGE / 3) + (prng(&random_state) % (RANGE / 3));

    do
    {
        d = RANGE_MIN + (prng(&random_state) % RANGE);
    } while (d % 2 == 0);
    key[12] = d;

    key[13] = RANGE_MIN + (prng(&random_state) % RANGE);
    
    printf("%s\n", key);
    return 0;
}