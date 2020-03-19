print("This is my very first line!!")

def counting(A, m) :
    n = len(A)
    count = [0] * (m + 1)
    for k in range(n) :
        count[A[k]] += 1
    return count


print (counting([5,5,6,9,1,3,22,32,1,3], 33))
