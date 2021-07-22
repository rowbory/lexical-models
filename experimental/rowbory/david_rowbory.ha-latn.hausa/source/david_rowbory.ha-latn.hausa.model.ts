/*
  Hausa 1.3 generated from texts.
  Customised by David Rowbory

  We remove all hooked letters for comparison purposes, so that we can find ha?uri by typing hak...
  This is a minimal lexical model source that uses a tab delimited wordlist.
  See documentation online at https://help.keyman.com/developer/ for
  additional parameters.

1.2 Caps sensitivity added.*/
const source: LexicalModelSource = {
  format: 'trie-1.0',
  wordBreaker: 'default',
  sources: ['hausa_cl.tsv', 'version.tsv'],
  languageUsesCasing: true,
  searchTermToKey: function (wordform: string): string {
    // Your searchTermToKey function goes here!
  // Use this pattern to remove common diacritical marks (accents).
  // See: https://www.compart.com/en/unicode/block/U+0300
  const COMBINING_DIACRITICAL_MARKS = /[\u0300-\u036f]/g;

    let key = wordform.toLowerCase();
    key = key.normalize('NFKD');
    key = key.replace("ƙ","k");
    key = key.replace("ɓ","b");
    key = key.replace("ɗ","d");
    key = key.replace("ƴ","y");
    key = key.replace("ɛ","e");
    key = key.replace(COMBINING_DIACRITICAL_MARKS, '');

    return key;
  }
  // other customizations go here:
};
export default source;
