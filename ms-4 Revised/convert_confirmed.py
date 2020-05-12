

# Access data from: https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_daily_reports
# Korea, South - Bahamas, The - Gambia, The : Must be manually fixed in the data (South Korea, Bahamas, Gambia) 

# Read file in
fi = open("05-11-2020.csv","r")
fi.readline() # skip over first title line
datarows = fi.readlines()
fi.close()

# Write file out
fo = open("leaf.txt","w")

count = 0 # count number of circles

# loop through all rows in the csv file
for line in datarows:
	templist = line.split(",")
	prov = templist[0]
	country = templist[1]
	confirmed = templist[5]
	deaths = templist[6]
	recover = templist[7]
	lat = templist[3]
	lon = templist[4]

	# make radius of circle bigger for cartographic appeal
	confirmedradius = int(confirmed) * 10
	
	if (int(confirmed) > 0):
		if (prov != ""):
			marker = "L.circle([" + lat + "," + lon + "],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:" + str(confirmedradius) + "}).addTo(map).bindPopup('" + prov.replace("'", "") + "," + country.replace("'","") + " : " + confirmed + "')"	
		else:
			marker = "L.circle([" + lat + "," + lon + "],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:" + str(confirmedradius) + "}).addTo(map).bindPopup('" + country.replace("'", "") + " : " + confirmed + "')"

		fo.write(marker + "\n")
		count = count + 1
		

print(str(count) + " markers written out")
fo.close()