import re

def main():
    try:
        with open(r'c:\Users\jonyr\.gemini\antigravity\conversations\88f4ddeb-27c2-4814-ac08-8ed40e0b27ff.pb', 'rb') as f:
            data = f.read()
        
        # Extract all readable ascii/utf-8 strings longer than 20 chars
        strings = re.findall(b'[\x20-\x7E\xA0-\xFF]{20,}', data)
        for s in strings:
            try:
                decoded = s.decode('utf-8', errors='ignore')
                if 'integr' in decoded.lower() or 'separ' in decoded.lower() or 'recomend' in decoded.lower():
                    print("-->", decoded)
            except:
                pass
    except Exception as e:
        print("Error:", e)

if __name__ == '__main__':
    main()
