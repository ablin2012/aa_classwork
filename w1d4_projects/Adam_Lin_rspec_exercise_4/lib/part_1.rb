def my_reject(arr, &prc)
  selected = []
  arr.each do |ele|
    selected << ele if !prc.call(ele)
  end
  return selected
end

def my_one?(arr, &prc)
  truths = []
  arr.each do |ele|
    truths << ele if prc.call(ele)
  end
  return true if truths.length == 1
  return false
end

def hash_select(hash, &prc)
  selected = {}
  hash.each do |k,v|
    selected[k] = v if prc.call(k,v)
  end
  return selected
end

def xor_select(arr, prc1, prc2)
  selected = []
  arr.each do |ele|
    selected << ele if (prc1.call(ele) || prc2.call(ele)) && !(prc1.call(ele) && prc2.call(ele))
  end
  return selected
end

def proc_count(val, arr)
  count = 0
  arr.each do |prc|
    count += 1 if prc.call(val)
  end
  return count
end