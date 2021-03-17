import requests 
import json
import pandas as pd
import folium


data = requests.get("https://data.cityofnewyork.us/resource/uvpi-gqnh.json")
data = data.json()
frame = pd.DataFrame(data=data)

fg = folium.FeatureGroup(name="Tree")
map = folium.Map(location=[40.74439820274483, -73.88404071329569], zoom_start=6, tiles="OpenStreetMap")
map.add_child((fg))
Lat = frame["latitude"]
Lon = frame["longitude"]
Address = frame["address"]
Health = frame["health"]
for lt, ln, ad, hl in zip(Lat, Lon,Address, Health):
        fg.add_child(folium.Marker(location=[lt, ln], popup=ad + "\n" + "Condition: " + str(hl), icon=folium.Icon(color="green")))
map.save("Map2.html")