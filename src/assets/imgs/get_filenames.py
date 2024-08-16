from os import listdir
from os.path import isfile, join
import json

path = r"C:\Users\nicho\Documents\GitHub\Compagnia dei Pitagorici - portfolio\src\assets\imgs\itinerari-cosmici\parini"
onlyfiles = [join(path, f) for f in listdir(path) if isfile(join(path, f))]

print(onlyfiles)

onlyfiles_obj = json.dumps(onlyfiles, indent=4)

with open("images_path.json", "w") as outfile:
    outfile.write(onlyfiles_obj)