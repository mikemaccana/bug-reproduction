import { Connection, Keypair } from "@solana/web3.js";
import { createMint } from "@solana/spl-token";
import { log } from "console";

const main = async () => {
  const connection = new Connection("http://127.0.0.1:8899");
  const testMintAuthority = new Keypair();
  var airdropSignature = await connection.requestAirdrop(
    testMintAuthority.publicKey,
    1_000_000_000
  );

  const latestBlockHash = await connection.getLatestBlockhash();

  // Wait for airdrop confirmation
  await connection.confirmTransaction({
    blockhash: latestBlockHash.blockhash,
    lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
    signature: airdropSignature,
  });

  // Fails with error c, aaka error 12 at
  // https://github.com/solana-labs/solana-program-library/blob/master/token/program/src/error.rs
  // 'Invalid instruction'
  const mintAccountPublicKey = await createMint(
    connection,
    testMintAuthority,
    testMintAuthority.publicKey,
    null, // Don't bother with a freeze address
    0
  );

  log(`mintAccountPublicKey:`, mintAccountPublicKey.toBase58());
};

main();
