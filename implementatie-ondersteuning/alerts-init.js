// GitHub-style alerts voor Marp
// Ondersteunt: [!NOTE], [!TIP], [!WARNING], [!CAUTION], [!IMPORTANT]

document.addEventListener('DOMContentLoaded', () => {
  const alertTypes = {
    'NOTE': 'note',
    'TIP': 'success',
    'WARNING': 'warning',
    'CAUTION': 'warning',
    'IMPORTANT': 'note'
  };

  document.querySelectorAll('blockquote').forEach(bq => {
    const firstP = bq.querySelector('p:first-child');
    if (!firstP) return;

    const text = firstP.innerHTML;
    const match = text.match(/^\[!(\w+)\]\s*/);

    if (match) {
      const type = alertTypes[match[1].toUpperCase()] || 'note';
      bq.classList.add('alert', `alert-${type}`);
      firstP.innerHTML = text.replace(match[0], '');
    }
  });
});
