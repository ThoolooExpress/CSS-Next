#This code is only to generate staff posts from a csv... csv format:
#firstname, lastname, role, major, minor, bio, email

import sys
import csv

csv_file = sys.argv[1]

template = """
---
layout: staff-profile
title:  "firstname lastname - role"
categories: [staff]
image: /assets/staff_img/firstname_lastname_YEAR_.PNG
position: "role"
posIndex: 1
yearGroup: "FULL-YEAR Academic Year"
staffName: "firstname lastname"
email: EMAIL
---

Major: MAJOR_
Minor: MINOR_

BIO
"""

#Set these values for the year
year = "2020"
year_group = "2020-2021"

replace = {
    "firstname": "{row[0]}",
    "lastname": "{row[1]}",
    "role": "{row[2]}",
    "MAJOR_": "{row[3]}",
    "MINOR_": "{row[4]}",
    "BIO": "{row[5]}",
    "EMAIL": "{row[6]}",
    "YEAR_": year,
    "FULL-YEAR": year_group
}

for key in replace.keys():
    template = template.replace(key, replace[key])

with open(csv_file) as cf:
    csv_reader = csv.reader(cf, delimiter='\t')
    line_count = 0
    for row in csv_reader:
        print(row)
        if line_count != 0:
            d = template.format(row=row)
            with open("_posts/staff/2020-06-01-{}-{}-staff-announcement.markdown".format(str(row[0]).lower(), str(row[1]).lower()), 'w') as f:
                f.write(d)
        line_count += 1
    print()
