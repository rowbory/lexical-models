/*
  Duya 1.1 generated from template.
  
  This is a minimal lexical model source that uses a tab delimited wordlist.
  See documentation online at https://help.keyman.com/developer/ for
  additional parameters.

1.1 Casing added*/

const source: LexicalModelSource = {
  format: 'trie-1.0',
  wordBreaker: 'default',
  sources: ['ldb.tsv', 'version.tsv'],
  languageUsesCasing: true
};
export default source;
