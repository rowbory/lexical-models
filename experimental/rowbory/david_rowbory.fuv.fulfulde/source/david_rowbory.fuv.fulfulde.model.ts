/* Fulfulde 1.2
 
  This is a minimal lexical model source that uses a tab delimited wordlist.

  Added a custom search term to key function to treat hooked letters as equivalent.
  See documentation online at https://help.keyman.com/developer/ for
  additional parameters.

  1.2 Caps sensitivity.
*/

const source: LexicalModelSource = {
  format: 'trie-1.0',
  wordBreaker: 'default',
  sources: ['fuv.tsv', 'version.tsv'],
  languageUsesCasing: true,
  searchTermToKey: function (wordform: string): string {
    // Your searchTermToKey function goes here!
  // Use this pattern to remove common diacritical marks (accents).
  // See: https://www.compart.com/en/unicode/block/U+0300
  const COMBINING_DIACRITICAL_MARKS = /[\u0300-\u036f]/g;

    let key = wordform.toLowerCase();
    key = key.normalize('NFKD');
    key = key.replace("?","k");
    key = key.replace("?“","b");
    key = key.replace("?","d");
    key = key.replace("?´","y");
    key = key.replace("'","");
    key = key.replace(COMBINING_DIACRITICAL_MARKS, '');

    return key;
  }
  // other customizations go here:
};
export default source;
