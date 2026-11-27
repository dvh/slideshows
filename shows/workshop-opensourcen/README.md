## Benodigdheden

Zorg dat je dit vóór de workshop geregeld hebt, dan kunnen we meteen aan de slag.

- Een laptop met code-editor (iets als VSCode)
- Een eigen project/repository dat je open source wilt maken (of een testrepo)
- [Node.js](https://nodejs.org/) versie 18 of hoger, voor het draaien van onze
  [repo docs generator](https://github.com/developer-overheid-nl/repo-docs-generator)
  met `npx`
- [Python 3](https://www.python.org/downloads/), nodig voor pipx en REUSE:
  - Ubuntu/Debian: staat er meestal al op; anders `sudo apt install python3`
  - macOS: `brew install python`
  - Windows: `winget install Python.Python.3.13`, of de installer van
    [python.org](https://www.python.org/downloads/) (vink "Add python.exe to PATH" aan)
- [pipx](https://pipx.pypa.io/), om de REUSE-tool mee te installeren:
  - Ubuntu/Debian: `sudo apt install pipx && pipx ensurepath`
  - macOS: `brew install pipx && pipx ensurepath`
  - Windows: `py -m pip install --user pipx && py -m pipx ensurepath`

  Open daarna een nieuwe terminal.

- [REUSE](https://reuse.software/) voor de licentie-informatie: `pipx install reuse`

### Hoe te testen

Kopieer deze commando's naar je terminal; als ze allemaal een versienummer tonen, ben
je er klaar voor:

```bash
git --version
node --version   # v18 of hoger
python3 --version   # op Windows: py --version
pipx --version
reuse --version
```

### Geen Node.js?

Geen probleem: de repo docs generator heeft ook een
[webformulier](https://developer-overheid-nl.github.io/repo-docs-generator/) waarmee je
dezelfde bestanden in je browser maakt en downloadt.
