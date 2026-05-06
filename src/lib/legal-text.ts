import type { Doc } from '../data/legal';

export function renderDocAsText(doc: Doc, lang: 'de' | 'en'): string {
  const noteLabel = lang === 'de' ? 'Hinweis' : 'Note';
  const lines: string[] = [];

  lines.push(doc.title);
  lines.push('='.repeat(doc.title.length));
  lines.push('');
  lines.push(doc.updated);
  lines.push('');

  if (doc.intro) {
    lines.push(doc.intro);
    lines.push('');
  }

  for (const section of doc.sections) {
    lines.push(section.title);
    lines.push('-'.repeat(section.title.length));
    lines.push('');
    for (const block of section.blocks) {
      if (block.type === 'p' && block.text) {
        lines.push(block.text);
        lines.push('');
      } else if (block.type === 'list' && block.items) {
        for (const item of block.items) lines.push(`- ${item}`);
        lines.push('');
      } else if (block.type === 'note' && block.text) {
        lines.push(`${noteLabel}: ${block.text}`);
        lines.push('');
      }
    }
  }

  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
}

export function textResponse(body: string): Response {
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
