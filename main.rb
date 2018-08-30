require 'uri'
require 'net/http'
require 'openssl'



language = "en"
year = "/seaons/2017"
season = "REG"
team_id = ""
sport = "nfl/official/trial/v5"
base_url = "https://api.sportradar.us/"
api_key = "?api_key=pkzwn64jjc8s7xuzpmch46a3"


# url = URI(base_url + sport + language + year + season)
url = URI("https://api.sportradar.us/nfl-ot2/league/2016/05/24/changes.xml?api_key=#{api_key}")
# nfl url format = url = URI("https://api.sportradar.us/nfl-ot1/games/2006/REG/03/schedule.xml?api_key={your_api_key}")
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body
