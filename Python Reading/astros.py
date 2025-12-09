import json
import urllib.request  

url = "http://api.open-notify.org/astros.json"
response = urllib.request.urlopen(url)

# Read raw bytes, decode JSON into Python structures
result = json.loads(response.read())

print(result)