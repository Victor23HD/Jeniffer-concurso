# Regenera site/js/content-data.js a partir dos .md
# Uso: python scripts/bundle_content.py
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / 'concurso-assistente-informatica'
OUT = ROOT / 'site' / 'js' / 'content-data.js'

def main():
    data = {}
    for path in sorted(CONTENT.rglob('*.md')):
        data[path.relative_to(CONTENT).as_posix()] = path.read_text(encoding='utf-8')
    OUT.write_text(
        'window.CONTENT_DATA = ' + json.dumps(data, ensure_ascii=False) + ';\n',
        encoding='utf-8',
    )
    print(f'OK: {len(data)} arquivos -> {OUT.relative_to(ROOT)}')

if __name__ == '__main__':
    main()
