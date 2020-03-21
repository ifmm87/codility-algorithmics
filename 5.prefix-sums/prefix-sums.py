def prefix_sums(A) :
    n = len(A)
    P = [0] * (n + 1)
    for k in range(1, n+1):
        P[k] = P[k - 1] + A[k - 1]
    return P

print(prefix_sums([5, 7, 8, 3, 0, 1, 5]));
