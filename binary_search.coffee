binary_search_no_slice = (sorted_haystack, needle) ->
	# inclusive
	start = 0

	# exclusive
	end   = sorted_haystack.length

	while end - start > 1
		middle = start + Math.floor (end - start) / 2
		val    = sorted_haystack[middle]

		if needle > val
			start = middle + 1
		else if needle < val
			end = middle
		else
			return middle

	if sorted_haystack[start] is needle
		return start

	return -1

arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]

console.log binary_search_no_slice arr, 10