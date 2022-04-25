def my_map(arr, &prc)
  array = []
  arr.each do |ele|
    array << prc.call(ele)
  end
  return array
end

def my_select(arr, &prc)
  array = []
  arr.each do |ele|
    if prc.call(ele)
      array << ele
    end
  end
  return array
end

def my_count(arr, &prc)
  count = 0
  arr.each do |ele|
    if prc.call(ele)
      count += 1
    end
  end
  return count
end

def my_any?(arr, &prc)
  arr.each do |ele|
    if prc.call(ele)
      return true
    end
  end
  return false
end

def my_all?(arr, &prc)
  arr.each do |ele|
    if !prc.call(ele)
      return false
    end
  end
  return true
end

def my_none?(arr, &prc)
  arr.each do |ele|
    if prc.call(ele)
      return false
    end
  end
  return true
end