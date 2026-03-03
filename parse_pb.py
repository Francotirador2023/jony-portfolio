import sys

def main():
    try:
        with open(r'c:\Users\jonyr\.gemini\antigravity\conversations\88f4ddeb-27c2-4814-ac08-8ed40e0b27ff.pb', 'rb') as f:
            text = f.read().decode('utf-8', errors='ignore')
        
        # We can extract large chunks containing the recommendations
        import re
        content_blocks = re.split(r'\n{2,}', text) # split by blank lines or similar chunks if possible
        
        # or just split by any control characters to get text blocks
        blocks = re.split(r'[\x00-\x09\x0B-\x1F\x7F]+', text)
        for b in blocks:
            if 'recomiend' in b.lower() or 'recomendaci' in b.lower() or 'curso' in b.lower():
                print("==> ", b.strip())
    except Exception as e:
        print("Error:", e)

if __name__ == '__main__':
    main()
