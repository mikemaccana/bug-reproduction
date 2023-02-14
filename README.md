## spl-token 0.3.5 regression

This repo uses spl-token 0.3.4 and works.

### To show repo works in 0.3.4

Run:

```
$ npx esrun runme.ts
mintAccountPublicKey: 8NWwHtU5ZBA2F7rTjGzqYZKtyCi2hB8pLhaZe8VsvRKU
```

And you should get a public key for `mintAccountPublicKey`.

### To upgrade to 0.3.5 and show regression

```
$ npm i @solana/spl-token@0.3.5
$ npx esrun runme.ts
```

Will fail with:

```
'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA failed: custom program error: 0xc'
```

Reverting will fix the bug.
