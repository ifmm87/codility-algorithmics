import pdf_count 
def solution (A, B, m) :
    n = len(A)
    sum_a = sum(A)
    sum_b = sum(B)
    d = sum_b - sum_a
    if d % 2 == 1 :
        return False
    d //= 2
    count = pdf_count.counting(A, m)
    for i in range(n) :
        if 0 <= B[i] - d and B[i] - d <= m and count[B[i]] > 0 :
            return True
    return False

print(solution([1,2,3], [1,2,3],4))
        

