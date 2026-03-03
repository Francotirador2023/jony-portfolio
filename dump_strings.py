import re
with open(r'c:\Users\jonyr\.gemini\antigravity\conversations\88f4ddeb-27c2-4814-ac08-8ed40e0b27ff.pb', 'rb') as f:
    data = f.read()
strings = re.findall(b'[a-zA-Z0-9 \\.,\\-_\\?!<>:;/\'\"]{20,}', data)
with open('dump.txt', 'w', encoding='utf-8') as out:
    for s in strings:
        out.write(s.decode('utf-8') + '\n')
