require 'http' # gem install http

a = %w(
  moskize91
  BlackHole1
  alwaysmavs
  Cheerego7
  l1shen
  hyrious
  leavesster
)

a.each { |e|
  url = "https://github.com/#{e}.png"
  data = HTTP.follow.get(url).body.to_s
  IO.binwrite "#{e}.png", data
  puts "[done] #{e}"
}
