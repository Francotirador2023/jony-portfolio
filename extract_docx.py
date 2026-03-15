import glob
import os
import zipfile
import xml.etree.ElementTree as ET
import shutil

# Find document
paths = glob.glob('C:/Users/jonyr/OneDrive/Escritorio/**/*3.CREACION*.docx', recursive=True)
if not paths:
    print("Not found")
    exit(1)

path = paths[0]
print("Found:", path)

# Copy to workspace
dest = 'c:/Users/jonyr/.gemini/antigravity/scratch/jony-portfolio/3_CREACION_PROYECTO.docx'
shutil.copy(path, dest)

# Extract text
z = zipfile.ZipFile(dest)
xml_content = z.read('word/document.xml')
tree = ET.fromstring(xml_content)
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
paragraphs = tree.findall('.//w:p', ns)
text = '\n'.join([''.join(t.text for t in p.findall('.//w:t', ns) if t.text) for p in paragraphs if p.findall('.//w:t', ns)])

with open('3_creacion_extract.txt', 'w', encoding='utf-8') as f:
    f.write(text)

print("Extraction complete")
